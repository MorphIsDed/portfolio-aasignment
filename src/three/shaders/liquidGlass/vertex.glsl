// Liquid Glass Sphere - Vertex Shader
// Simplex Noise + Organic Deformation + Breathing Motion

uniform float uTime;
uniform vec3 uMouse;
uniform float uNoiseScale;
uniform float uNoiseAmplitude;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDepth;

// Simplex Noise functions (Perry's implementation)
vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec2 permute2(vec2 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float simplexNoise3D(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, vec3(C.y)));
  vec3 x0 = v - i + dot(i, vec3(C.x));

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.x;
  vec3 x2 = x0 - i2 + C.y;
  vec3 x3 = x0 - D.yyy;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec3(0.0, i1.z, i2.z))
               + i.y + vec3(0.0, i1.y, i2.y))
               + i.x + vec3(0.0, i1.x, i2.x));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

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
  vec4 n_ = n * n;
  n_ = n_ * n_;

  return 2.0 * dot(n_, g_);
}

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  vDepth = length(position);

  // Multi-octave Simplex Noise (Fractional Brownian Motion)
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

  // Breathing motion (pulsation)
  float breathing = sin(uTime * 0.5) * 0.15 + 0.85;

  // Apply deformation
  vec3 newPosition = normalize(position) * (1.0 + noise * uNoiseAmplitude * breathing) * length(position);

  // Mouse influence (subtle attraction)
  vec3 mouseInfluence = normalize(uMouse) * 0.05 * sin(uTime);
  newPosition += mouseInfluence;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
