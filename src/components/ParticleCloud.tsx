import { AdditiveBlending, Texture } from "three";

function generateSprite() {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;

  const context = canvas.getContext("2d");
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
  return (
    <points>
      <pointsMaterial
        color="0xffffff"
        size={3}
        transparent
        blending={AdditiveBlending}
        depthWrite={false}
        map={generateSprite()}
      />
      {/* static geometry. will add controls logic later. */}
      <torusKnotGeometry args={[13, 1.7, 156, 12, 5, 4]} />
    </points>
  );
}
