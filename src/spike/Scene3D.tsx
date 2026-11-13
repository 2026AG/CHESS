import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Compatibility-spike scene (Step 1). Real Board3D lands on Step 6.
export default function Scene3D() {
  return (
    <div style={{ width: 320, height: 240 }} aria-label="3D spike">
      <Canvas>
        <ambientLight intensity={0.6} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#b08d57" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
