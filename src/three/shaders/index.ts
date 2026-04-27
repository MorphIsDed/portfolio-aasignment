// Shader Loader Utility
// Dynamically loads .glsl files and compiles them

import {
  DoubleSide,
  ShaderMaterial,
  Vector3,
  type IUniform,
  type ShaderMaterialParameters,
} from 'three';


/**
 * Load shader files and return compiled shader material
 */
export async function loadShader(
  vertexPath: string,
  fragmentPath: string,
  uniforms: Record<string, IUniform>
): Promise<ShaderMaterial> {
  let vertexShader: string;
  let fragmentShader: string;

  try {
    // Fetch vertex and fragment shaders
    const [vertexResponse, fragmentResponse] = await Promise.all([
      fetch(vertexPath),
      fetch(fragmentPath),
    ]);

    if (!vertexResponse.ok || !fragmentResponse.ok) {
      throw new Error('Failed to fetch shader files');
    }

    vertexShader = await vertexResponse.text();
    fragmentShader = await fragmentResponse.text();
  } catch (error) {
    console.error('Shader loading error:', error);
    // Fallback to inline shaders if fetch fails
    vertexShader = defaultVertexShader;
    fragmentShader = defaultFragmentShader;
  }

  const materialConfig: ShaderMaterialParameters = {
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    wireframe: false,
    side: DoubleSide,
  };

  return new ShaderMaterial(materialConfig);
}

/**
 * Create shader uniforms object
 */
export function createShaderUniforms(config?: {
  noiseScale?: number;
  noiseAmplitude?: number;
  aberrationAmount?: number;
  freshnelPower?: number;
  shaderQuality?: number;
}): Record<string, IUniform> {
  return {
    uTime: { value: 0.0 },
    uMouse: { value: new Vector3(0, 0, 0) },
    uLightPosition: { value: new Vector3(5, 5, 5) },
    uNoiseScale: { value: config?.noiseScale ?? 1.5 },
    uNoiseAmplitude: { value: config?.noiseAmplitude ?? 0.3 },
    uAberrationAmount: { value: config?.aberrationAmount ?? 1.0 },
    uFreshnelPower: { value: config?.freshnelPower ?? 2.5 },
    uState: { value: 0 }, // Updated by experience store
    uShaderQuality: { value: config?.shaderQuality ?? 1.0 },
  };
}

/**
 * Update shader uniforms each frame
 */
export function updateShaderUniforms(
  material: ShaderMaterial,
  _deltaTime: number,
  data: {
    time?: number;
    mouse?: Vector3;
    lightPosition?: Vector3;
    state?: number;
    shaderQuality?: number;
  }
): void {
  if (data.time !== undefined) {
    material.uniforms.uTime.value = data.time;
  }

  if (data.mouse) {
    material.uniforms.uMouse.value = data.mouse;
  }

  if (data.lightPosition) {
    material.uniforms.uLightPosition.value = data.lightPosition;
  }

  if (data.state !== undefined) {
    material.uniforms.uState.value = data.state;
  }

  if (data.shaderQuality !== undefined) {
    material.uniforms.uShaderQuality.value = data.shaderQuality;
  }
}

// Fallback shaders (basic Phong if fetch fails)
const defaultVertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const defaultFragmentShader = `
  varying vec3 vNormal;
  void main() {
    gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);
  }
`;
