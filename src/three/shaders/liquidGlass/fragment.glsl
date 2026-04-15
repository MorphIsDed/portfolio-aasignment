// Liquid Glass Sphere - Fragment Shader
// Fresnel Effect + Chromatic Aberration + Iridescence

uniform float uTime;
uniform vec3 uLightPosition;
uniform float uAberrationAmount;
uniform float uFreshnelPower;
uniform int uState; // 0: hero, 1: about, 2: projects, 3: contact
uniform float uShaderQuality; // 0-1, for performance scaling

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDepth;

// Fresnel calculation
float fresnel(vec3 normal, vec3 viewDir, float power) {
  float dotProd = max(0.0, dot(normalize(normal), normalize(viewDir)));
  return 1.0 - pow(dotProd, power);
}

// Chromatic aberration (fake dispersion)
vec3 chromaticAberration(vec3 normal, vec3 viewDir, float amount) {
  float offset = amount * 0.005;
  
  float red = fresnel(normal + vec3(offset, 0.0, 0.0), viewDir, uFreshnelPower);
  float green = fresnel(normal, viewDir, uFreshnelPower);
  float blue = fresnel(normal - vec3(offset, 0.0, 0.0), viewDir, uFreshnelPower);
  
  return vec3(red, green, blue);
}

// State-based color palette
vec3 getColorForState() {
  switch(uState) {
    case 0: return vec3(0.1, 0.8, 1.0); // Hero: Cool cyan
    case 1: return vec3(1.0, 0.6, 0.2); // About: Warm orange
    case 2: return vec3(0.7, 0.2, 1.0); // Projects: Purple
    case 3: return vec3(0.2, 1.0, 0.6); // Contact: Green
    default: return vec3(0.5, 0.5, 0.5);
  }
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = cameraPosition - vPosition;
  
  // Fresnel edge highlight
  float freshnelEffect = fresnel(normal, viewDir, uFreshnelPower);
  
  // Chromatic aberration (only if quality allows)
  vec3 aberrationColor = chromaticAberration(normal, viewDir, uAberrationAmount);
  if(uShaderQuality < 0.5) {
    aberrationColor = vec3(freshnelEffect);
  }
  
  // Base glass material with iridescence
  vec3 baseColor = getColorForState();
  
  // Light reflection
  vec3 lightDir = normalize(uLightPosition - vPosition);
  float lightIntensity = max(0.0, dot(normal, lightDir));
  
  // Subsurface scattering illusion (fake thickness)
  float subsurface = pow(max(0.0, -dot(normal, lightDir)), 2.0) * 0.3;
  
  // Final color composition
  vec3 finalColor = mix(
    baseColor * (0.3 + lightIntensity * 0.7),
    aberrationColor,
    freshnelEffect
  ) + subsurface;
  
  // Atmospheric depth cueing
  float depthFade = smoothstep(0.5, 5.0, vDepth);
  finalColor *= mix(1.2, 0.8, depthFade);
  
  // Non-uniform thickness: added shimmer with time
  finalColor += vec3(0.1) * sin(uTime * 2.0 + vDepth * 5.0) * freshnelEffect * 0.3;
  
  gl_FragColor = vec4(finalColor, 0.85);
}
