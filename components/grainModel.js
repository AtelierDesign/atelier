import React, { useRef } from 'react';
import { useLoader } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'
import ReactDOM from "react-dom"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={nodes.Curve.material}
        position={[0, 0.5, -0.09]}
      />
    </group>

  )
}

useGLTF.preload('/model.gltf')
