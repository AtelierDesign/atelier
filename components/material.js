import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default function Model(props) {
  const [matcap] = useTexture(["/normals"]);
  const gltf = useLoader(GLTFLoader, "/Ady.gltf");
  const group = useRef()
  const { nodes, materials } = useGLTF('/Ady.gltf')

  return (
<group ref={group} {...props} dispose={null}>
  <group name="Scene">
    <group
      name="Light"
      position={[4.07625, 5.90386, -1.00545]}
      rotation={[1.89013, 0.88057, -2.04522]}
    />
    <group
      name="Camera"
      position={[7.35889, 4.95831, 6.92579]}
      rotation={[1.24207, 0.32997, -0.75971]}
    />
    <group name="Material_Preview_Dummy" />
    <mesh
      name="Curve"
      castShadow
      receiveShadow
      geometry={nodes.Curve.geometry}
      material={materials.Jewelry}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial metalness={1} roughness={0} color="yellow" />
    </mesh>
  </group>
</group>

  )
}

useGLTF.preload('/Ady.gltf')
