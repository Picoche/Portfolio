import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = ({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) => {
  const targetRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <mesh
      position={position}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      scale={scale}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
