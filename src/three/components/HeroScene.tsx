import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { BufferAttribute, BufferGeometry, Group } from "three";
import HeroSphere from "./HeroSphere";

interface HeroSceneProps {
  activeProjectIndex: number;
  scrollProgress: number;
}

const seededUnit = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

interface SceneContentProps {
  activeProjectIndex: number;
  scrollProgress: number;
  particleGeometry: BufferGeometry;
}

function SceneContent({ activeProjectIndex, scrollProgress, particleGeometry }: SceneContentProps) {
  const groupRef = useRef<Group>(null);
  const colors = ["#3ddfff", "#ff9f40", "#bf5cff", "#39ff9e"];
  const safeIndex = ((activeProjectIndex % colors.length) + colors.length) % colors.length;
  const activeColor = colors[safeIndex];

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.18;
      groupRef.current.position.y = -0.5 + scrollProgress * 0.5;
      groupRef.current.position.x = Math.sin(scrollProgress * Math.PI * 0.85) * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.65} />
      <pointLight position={[3.5, 2, 3]} intensity={1.1} />
      <pointLight position={[-2, -1.5, 1]} intensity={0.35} />

      <group ref={groupRef} rotation={[0.18, 0.25, 0]}>
        <HeroSphere projectState={activeProjectIndex} />

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.78, 1.92, 96]} />
          <meshBasicMaterial color={activeColor} transparent opacity={0.16} side={2} />
        </mesh>

        <points>
          <primitive object={particleGeometry} attach="geometry" />
          <pointsMaterial size={0.03} color={activeColor} opacity={0.8} transparent />
        </points>

        <mesh position={[1.55, 0.65, -0.3]}>
          <sphereGeometry args={[0.075, 10, 10]} />
          <meshBasicMaterial color={activeColor} />
        </mesh>
      </group>
    </>
  );
}

export default function HeroScene({ activeProjectIndex, scrollProgress }: HeroSceneProps) {
  const particlePositions = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const theta = seededUnit(i + 1) * Math.PI * 2;
      const phi = Math.acos(2 * seededUnit(i + 101) - 1);
      const radius = 1.9 + seededUnit(i + 251) * 0.45;
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
      positions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
      positions[i * 3 + 2] = Math.cos(phi) * radius;
    }
    return positions;
  }, []);

  const particleGeometry = useMemo(() => {
    const geom = new BufferGeometry();
    geom.setAttribute("position", new BufferAttribute(particlePositions, 3));
    return geom;
  }, [particlePositions]);

  useEffect(() => {
    return () => {
      particleGeometry.dispose();
    };
  }, [particleGeometry]);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 70 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <SceneContent activeProjectIndex={activeProjectIndex} scrollProgress={scrollProgress} particleGeometry={particleGeometry} />
    </Canvas>
  );
}
