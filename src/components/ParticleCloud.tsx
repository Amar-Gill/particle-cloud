import { AdditiveBlending, Points, Texture } from "three";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function generateSprite() {
  const canvas = document.createElement("canvas");

  canvas.width = 16;
  canvas.height = 16;

  const context = canvas.getContext("2d")!;

  const gradient = context.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2
  );

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(0,255,255,1)");
  gradient.addColorStop(0.4, "rgba(0,0,64,1)");
  gradient.addColorStop(1, "rgba(0,0,0,1)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function ParticleCloud() {
  const { radius, tube, tubularSegments, radialSegments, p, q, rotate } =
    useControls({
      radius: {
        value: 13,
        min: 1,
        max: 100,
        step: 0.1,
      },
      tube: {
        value: 1.7,
        min: 1,
        max: 100,
        step: 0.1,
      },
      tubularSegments: {
        value: 156,
        min: 8,
        max: 256,
        step: 1,
      },
      radialSegments: {
        value: 12,
        min: 4,
        max: 32,
        step: 1,
      },
      p: {
        value: 5,
        min: 1,
        max: 12,
        step: 1,
      },
      q: {
        value: 4,
        min: 1,
        max: 12,
        step: 1,
      },
      rotate: false,
    });

  const points = useRef<Points>(null!);

  useFrame(() => {
    if (rotate) {
      points.current.rotation.y += 0.01;
    }
  });

  return (
    <points ref={points}>
      <pointsMaterial
        color="0xffffff"
        size={3}
        transparent
        blending={AdditiveBlending}
        depthWrite={false}
        map={generateSprite()}
      />
      <torusKnotGeometry
        args={[radius, tube, tubularSegments, radialSegments, p, q]}
      />
    </points>
  );
}
