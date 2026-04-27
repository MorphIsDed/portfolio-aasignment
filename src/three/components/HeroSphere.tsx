// HeroSphere Component
// Central 3D asset with Liquid Glass shader + interactive behavior

import React, { useEffect, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import {
  DoubleSide,
  Mesh,
  ShaderMaterial,
  Vector3,
  type ShaderMaterialParameters,
} from 'three';
import { useExperienceStore } from '../../store/experienceStore';
import { createShaderUniforms, updateShaderUniforms } from '../shaders/index';

interface HeroSphereProps {
  scale?: number;
  noiseScale?: number;
  noiseAmplitude?: number;
  projectState?: number;
  onShaderReady?: (material: ShaderMaterial) => void;
}

/**
 * Liquid Glass Hero Sphere
 * - Custom GLSL shaders with Simplex noise
 * - Interactive mouse following
 * - State-responsive color changes
 */
const HeroSphere: React.FC<HeroSphereProps> = ({
  scale = 1,
  noiseScale = 1.5,
  noiseAmplitude = 0.3,
  projectState = 0,
  onShaderReady,
}) => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const timeRef = useRef(0);
  const mouseRef = useRef(new Vector3(0, 0, 0));
  const lightPositionRef = useRef(new Vector3(0, 3, 5));

  const {
    shaderQuality,
  } = useExperienceStore();

  // Inline GLSL shaders (fallback if file loading fails)
  const vertexShader = `
    uniform float uTime;
    uniform vec3 uMouse;
    uniform float uNoiseScale;
    uniform float uNoiseAmplitude;

    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vDepth;

    // Simplex Noise (simplified)
    vec3 permute(vec3 x) {
      return mod(((x * 34.0) + 1.0) * x, 289.0);
    }

    float simplexNoise3D(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      vec3 i = floor(v + dot(v, vec3(C.y)));
      vec3 x0 = v - i + dot(i, vec3(C.x));
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.x;
      vec3 x2 = x0 - i2 + C.y;
      vec3 x3 = x0 - 0.5;
      i = mod(i, 289.0);
      vec4 p = permute(permute(permute(i.z + vec3(0.0, i1.z, i2.z))
                   + i.y + vec3(0.0, i1.y, i2.y))
                   + i.x + vec3(0.0, i1.x, i2.x));
      float n_ = 0.142857142857;
      vec3 ns = n_ * vec3(0.0, 1.0, 2.0) - vec3(1.0, 1.0, 1.0);
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j) * ns.x + ns.yyyy;
      vec4 y_ = floor(fract(x_) * 7.0) * ns.x;
      vec4 x = x_ - y_;
      vec4 y = abs(x) - 0.5;
      vec4 b = floor(x + 0.5) * 2.0;
      vec4 f = x - (b - 1.0);
      vec4 g_ = vec4(0.0);
      bvec4 eq = equal(mod(b, 2.0), vec4(0.0));
      g_.xz = mix(f.xz, vec4(y.x, y.z), eq.xz);
      g_.yw = mix(f.yw, vec4(y.y, y.w), eq.yw);
      float n = 1.79284291400159 - 0.85373472095314 * (x_ * x_ + y * y);
      vec4 n_val = n * n;
      n_val = n_val * n_val;
      return 2.0 * dot(n_val, g_);
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vDepth = length(position);

      float noise = 0.0;
      float amplitude = 1.0;
      float frequency = 1.0;
      float maxValue = 0.0;

      for(int i = 0; i < 4; i++) {
        noise += simplexNoise3D(position * frequency * uNoiseScale + vec3(uTime * 0.3)) * amplitude;
        maxValue += amplitude;
        amplitude *= 0.5;
        frequency *= 2.0;
      }

      noise /= maxValue;
      float breathing = sin(uTime * 0.5) * 0.15 + 0.85;
      vec3 newPosition = normalize(position) * (1.0 + noise * uNoiseAmplitude * breathing) * length(position);
      vec3 mouseInfluence = normalize(uMouse) * 0.05 * sin(uTime);
      newPosition += mouseInfluence;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uLightPosition;
    uniform float uAberrationAmount;
    uniform float uFreshnelPower;
    uniform int uState;
    uniform float uShaderQuality;

    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vDepth;

    float fresnel(vec3 normal, vec3 viewDir, float power) {
      float dotProd = max(0.0, dot(normalize(normal), normalize(viewDir)));
      return 1.0 - pow(dotProd, power);
    }

    vec3 getColorForState() {
      if (uState == 0) return vec3(0.1, 0.8, 1.0);    // Hero: Cyan
      if (uState == 1) return vec3(1.0, 0.6, 0.2);    // About: Orange
      if (uState == 2) return vec3(0.7, 0.2, 1.0);    // Projects: Purple
      if (uState == 3) return vec3(0.2, 1.0, 0.6);    // Contact: Green
      return vec3(0.5, 0.5, 0.5);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = cameraPosition - vPosition;
      
      float freshnelEffect = fresnel(normal, viewDir, uFreshnelPower);
      vec3 baseColor = getColorForState();
      vec3 lightDir = normalize(uLightPosition - vPosition);
      float lightIntensity = max(0.0, dot(normal, lightDir));
      float subsurface = pow(max(0.0, -dot(normal, lightDir)), 2.0) * 0.3;

      vec3 finalColor = mix(
        baseColor * (0.3 + lightIntensity * 0.7),
        freshnelEffect * baseColor,
        freshnelEffect
      ) + subsurface;

      float depthFade = smoothstep(0.5, 5.0, vDepth);
      finalColor *= mix(1.2, 0.8, depthFade);
      finalColor += vec3(0.1) * sin(uTime * 2.0 + vDepth * 5.0) * freshnelEffect * 0.3;

      gl_FragColor = vec4(finalColor, 0.85);
    }
  `;

  // Create shader material with uniforms
  const uniforms = useMemo(
    () =>
      createShaderUniforms({
        noiseScale,
        noiseAmplitude: noiseAmplitude + projectState * 0.05,
        aberrationAmount: 1.0 + projectState * 0.15,
        freshnelPower: 2.5 + projectState * 0.4,
        shaderQuality,
      }),
    [noiseScale, noiseAmplitude, projectState, shaderQuality]
  );

  const shaderMaterial = useMemo(
    () => {
      const materialConfig: ShaderMaterialParameters = {
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        wireframe: false,
        side: DoubleSide,
      };

      return new ShaderMaterial(materialConfig);
    },
    [fragmentShader, uniforms, vertexShader]
  );

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.set(x, y, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useFrame((_, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    timeRef.current += delta;
    lightPositionRef.current.set(
      Math.sin(timeRef.current * 0.5) * 5,
      3,
      Math.cos(timeRef.current * 0.5) * 5
    );

    // Update shader uniforms
    updateShaderUniforms(materialRef.current, delta, {
      time: timeRef.current,
      mouse: mouseRef.current,
      lightPosition: lightPositionRef.current,
      state: projectState % 4,
      shaderQuality,
    });

    // Gentle rotation with breathing effect
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
      
      // Breathing scale based on time
      const breathing = Math.sin(timeRef.current * 0.5) * 0.05 + 1;
      meshRef.current.scale.set(breathing, breathing, breathing);
    }
  });

  // Callback when material is ready
  useEffect(() => {
    materialRef.current = shaderMaterial;
    onShaderReady?.(shaderMaterial);
  }, [shaderMaterial, onShaderReady]);

  return (
    <mesh ref={meshRef} scale={scale}>
      <Icosahedron args={[1, 6]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
};

export default HeroSphere;
