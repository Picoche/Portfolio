/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.SkinnedMesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
  animations: THREE.AnimationClip[];
};

export default function Developer({
  animationName = "idle",
  ...props
}: {
  animationName: string;
  props: JSX.IntrinsicElements["group"];
}) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/models/animations/developer.glb"
  ) as GLTFResult;

  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: bowingAnimation } = useFBX("/models/animations/bow.fbx");
  const { animations: shakeHandsAnimation } = useFBX(
    "/models/animations/shake-hands.fbx"
  );

  idleAnimation[0].name = "idle";
  bowingAnimation[0].name = "bow";
  shakeHandsAnimation[0].name = "shake-hands";

  const { actions } = useAnimations(
    [idleAnimation[0], bowingAnimation[0], shakeHandsAnimation[0]],
    group
  );

  useEffect(() => {
    actions[animationName]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animationName]?.reset().fadeOut(0.5);
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[0, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="node_0479dce7_5b1e_42bd_a3fb_b0c455b5732c_mesh0"
            geometry={
              nodes.node_0479dce7_5b1e_42bd_a3fb_b0c455b5732c_mesh0.geometry
            }
            material={materials["mat_0.002"]}
            skeleton={
              nodes.node_0479dce7_5b1e_42bd_a3fb_b0c455b5732c_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_08f3b9f0_aa1f_4813_bed2_edadd2b37b4b_mesh0"
            geometry={
              nodes.node_08f3b9f0_aa1f_4813_bed2_edadd2b37b4b_mesh0.geometry
            }
            material={materials["mat_0.002"]}
            skeleton={
              nodes.node_08f3b9f0_aa1f_4813_bed2_edadd2b37b4b_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_1c021a6f_62c3_423c_93d3_f20353f58ef8_mesh0"
            geometry={
              nodes.node_1c021a6f_62c3_423c_93d3_f20353f58ef8_mesh0.geometry
            }
            material={materials["mat_3.002"]}
            skeleton={
              nodes.node_1c021a6f_62c3_423c_93d3_f20353f58ef8_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_58e59097_7da4_49e5_a242_d52e8a5f5060_mesh0"
            geometry={
              nodes.node_58e59097_7da4_49e5_a242_d52e8a5f5060_mesh0.geometry
            }
            material={materials["mat_6.002"]}
            skeleton={
              nodes.node_58e59097_7da4_49e5_a242_d52e8a5f5060_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_99a7491f_9325_4a5f_ae1f_017f830e6e6a_mesh0"
            geometry={
              nodes.node_99a7491f_9325_4a5f_ae1f_017f830e6e6a_mesh0.geometry
            }
            material={materials["mat_8.002"]}
            skeleton={
              nodes.node_99a7491f_9325_4a5f_ae1f_017f830e6e6a_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_c5398c05_2b4a_4e3c_a804_fac65bfb8d8f_mesh0"
            geometry={
              nodes.node_c5398c05_2b4a_4e3c_a804_fac65bfb8d8f_mesh0.geometry
            }
            material={materials["mat_1.002"]}
            skeleton={
              nodes.node_c5398c05_2b4a_4e3c_a804_fac65bfb8d8f_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_cd014cb1_eab3_4687_aaf4_f8e61c4c25cd_mesh0"
            geometry={
              nodes.node_cd014cb1_eab3_4687_aaf4_f8e61c4c25cd_mesh0.geometry
            }
            material={materials["mat_5.002"]}
            skeleton={
              nodes.node_cd014cb1_eab3_4687_aaf4_f8e61c4c25cd_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_edeac3db_8167_40bd_9ef4_67f0607ca4c5_mesh0"
            geometry={
              nodes.node_edeac3db_8167_40bd_9ef4_67f0607ca4c5_mesh0.geometry
            }
            material={materials["mat_4.002"]}
            skeleton={
              nodes.node_edeac3db_8167_40bd_9ef4_67f0607ca4c5_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_f937473e_f2f8_4feb_ac93_34d0a006ee51_mesh0"
            geometry={
              nodes.node_f937473e_f2f8_4feb_ac93_34d0a006ee51_mesh0.geometry
            }
            material={materials["mat_7.002"]}
            skeleton={
              nodes.node_f937473e_f2f8_4feb_ac93_34d0a006ee51_mesh0.skeleton
            }
          />
          <skinnedMesh
            name="node_fcc17e11_6c73_4a7b_a967_cf653f59f501_mesh0"
            geometry={
              nodes.node_fcc17e11_6c73_4a7b_a967_cf653f59f501_mesh0.geometry
            }
            material={materials["mat_2.002"]}
            skeleton={
              nodes.node_fcc17e11_6c73_4a7b_a967_cf653f59f501_mesh0.skeleton
            }
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/animations/developer.glb");
