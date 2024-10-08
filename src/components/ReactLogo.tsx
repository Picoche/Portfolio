import { Float, useGLTF } from "@react-three/drei";
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

const ReactLogo = ({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) => {
  const { nodes, materials } = useGLTF("/models/react_logo.glb") as GLTFResult;
  return (
    <Float floatIntensity={1} speed={2}>
      <group scale={scale} position={position} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react_logo.glb");

export default ReactLogo;
