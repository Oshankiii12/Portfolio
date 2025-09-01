import React from "react";
import { useGLTF, Center } from "@react-three/drei";

export function Desktop(props) {
  const { scene } = useGLTF("/models/my_computer.glb");

  return (
    <group {...props}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/my_computer.glb");
