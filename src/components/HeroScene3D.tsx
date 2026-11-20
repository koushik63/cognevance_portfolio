import { Float } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface HeroScene3DProps {
  reducedMotion: boolean;
}

function CyberAvatar({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Mouse-responsive subtle 3D tilt
    const targetX = reducedMotion ? 0 : state.pointer.y * 0.22;
    const targetY = reducedMotion ? 0 : state.pointer.x * 0.35;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.06
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.06
    );

    if (reducedMotion) return;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35;
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.25;
      ring2Ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.6;
      coreRef.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      <Float
        speed={reducedMotion ? 0 : 2}
        rotationIntensity={reducedMotion ? 0 : 0.15}
        floatIntensity={reducedMotion ? 0 : 0.35}
      >
        {/* Faceted Abstract Developer Head */}
        <mesh position={[0, 0.35, 0]}>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshStandardMaterial
            color="#0D1720"
            metalness={0.75}
            roughness={0.28}
            flatShading
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh position={[0, 0.35, 0]} scale={1.03}>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshBasicMaterial
            color="#22D3EE"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>

        {/* Futuristic Cyan Visor */}
        <mesh position={[0, 0.42, 0.64]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[0.88, 0.16, 0.22]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#06B6D4"
            emissiveIntensity={1.2}
            metalness={0.4}
            roughness={0.2}
          />
        </mesh>

        {/* Visor Housing Frame */}
        <mesh position={[0, 0.42, 0.56]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[1.02, 0.24, 0.2]} />
          <meshStandardMaterial
            color="#111E2B"
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>

        {/* Inner Neural Core */}
        <mesh ref={coreRef} position={[0, 0.35, 0]}>
          <octahedronGeometry args={[0.38, 0]} />
          <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.45} />
        </mesh>

        {/* Cybernetic Neck / Collar */}
        <mesh position={[0, -0.52, 0]}>
          <cylinderGeometry args={[0.32, 0.44, 0.35, 8]} />
          <meshStandardMaterial
            color="#0D1720"
            metalness={0.8}
            roughness={0.35}
            flatShading
          />
        </mesh>

        {/* Stylized Shoulder Chassis */}
        <mesh position={[0, -0.88, 0]} scale={[1.4, 0.55, 0.85]}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial
            color="#0A121A"
            metalness={0.75}
            roughness={0.35}
            flatShading
          />
        </mesh>
        <mesh position={[0, -0.88, 0]} scale={[1.42, 0.57, 0.87]}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.18} />
        </mesh>
      </Float>

      {/* Orbital Gyroscope Ring 1 */}
      <mesh ref={ring1Ref} position={[0, 0.2, 0]} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[1.45, 0.015, 16, 80]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.45} />
      </mesh>

      {/* Orbital Gyroscope Ring 2 */}
      <mesh ref={ring2Ref} position={[0, 0.2, 0]} rotation={[-Math.PI / 4, -0.3, 0]}>
        <torusGeometry args={[1.75, 0.01, 16, 96]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function FloatingGeometries({ reducedMotion }: { reducedMotion: boolean }) {
  const nodes = useMemo(
    () => [
      { pos: [-2.1, 1.35, -0.6] as [number, number, number], scale: 0.22, speed: 1.8 },
      { pos: [2.2, 1.1, -0.8] as [number, number, number], scale: 0.18, speed: 2.2 },
      { pos: [-1.9, -1.15, -0.4] as [number, number, number], scale: 0.16, speed: 1.5 },
      { pos: [2.05, -1.05, -0.5] as [number, number, number], scale: 0.24, speed: 1.9 },
    ],
    []
  );

  return (
    <>
      {nodes.map((node, idx) => (
        <Float
          key={idx}
          speed={reducedMotion ? 0 : node.speed}
          rotationIntensity={reducedMotion ? 0 : 0.8}
          floatIntensity={reducedMotion ? 0 : 0.6}
        >
          <mesh position={node.pos} scale={node.scale}>
            {idx % 2 === 0 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <boxGeometry args={[1.2, 1.2, 1.2]} />
            )}
            <meshBasicMaterial
              color="#22D3EE"
              wireframe
              transparent
              opacity={0.45}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function CyanParticles({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 160;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Deterministic pseudo-random distribution for clean render
      const angle = i * 2.39996;
      const radius = 1.6 + ((i * 17) % 100) / 38;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = (((i * 31) % 100) / 100 - 0.5) * 4.2;
      arr[i * 3 + 2] = Math.sin(angle) * radius * 0.7 - 0.8;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current || reducedMotion) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      state.pointer.y * 0.08,
      0.03
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#22D3EE"
        size={0.035}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene3D({ reducedMotion }: HeroScene3DProps) {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.1, 4.6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 5, 4]} intensity={1.4} color="#F8FAFC" />
        <pointLight position={[-3, 1, 3]} intensity={1.8} color="#22D3EE" />
        <pointLight position={[3, -2, -2]} intensity={0.9} color="#06B6D4" />

        <CyberAvatar reducedMotion={reducedMotion} />
        <FloatingGeometries reducedMotion={reducedMotion} />
        <CyanParticles reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
