import { Canvas } from "@react-three/fiber";
import ParticleCloud from "./ParticleCloud";

export default function CanvasContainer() {
  return (
    <Canvas camera={{ position: [15, 30, 30] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ParticleCloud />
    </Canvas>
  );
}
