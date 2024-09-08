import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";

import { GLTF } from "three-stdlib";
import { Mesh, Material } from "three";
type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: Material;
  };
};

const Cube = ({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) => {
  const { nodes } = useGLTF("models/cube.glb") as GLTFResult;

  const texture = useTexture("textures/cube.png");

  const cubeRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current ? cubeRef.current.rotation : { x: 0, y: 0 }, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group
        position={position}
        rotation={[2.6, 0.8, -1.8]}
        scale={scale}
        dispose={null}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");

export default Cube;
