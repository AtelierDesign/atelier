import React, { useRef } from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useTexture } from '@react-three/drei';


export default function Model(props) {
  const gltf = useLoader(GLTFLoader, "/model.gltf");
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.gltf')

  return (
<group ref={group} {...props} dispose={null}>
  <group name="Scene">
    <mesh name="Curve" castShadow receiveShadow geometry={nodes.Curve.geometry} rotation={[1.5712, -0.0005, -0.8164]} scale={[8, 8, 8]} userData={{ name: 'Curve' }} material={materials[ 'Galvanized Steel']}>
    <meshStandardMaterial color="red" />
    </mesh>
  </group>
</group>

  )
}

useGLTF.preload('/model.gltf')
