import { Canvas } from "@react-three/fiber";
import ParticleCloud from "./ParticleCloud";

export default function CanvasContainer() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ParticleCloud />
    </Canvas>
  );
}
