import Layout from '../components/layout';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Billboard, Stage, Environment, TransformControls } from '@react-three/drei';
import Model from '../components/model';




export default function Design() {
	const ref = useRef()

  return (

<div className="canvas">
  <div className="overlay">
    (h)<a className="overlay__link" href="https://threejs.org"> three.js</a>
    <br></br>
    view source on _<a className="overlay__link" href="https://github.com/chvndler"> github</a>
  </div>
  <Canvas className="three" shadows dpr={[1, 2]} camera={{ position: [1, 2, 2] }}>
    <Suspense fallback={null}>
      <Environment background={true} files={"/sunrise_1k.hdr"} />
      <Stage
        controls={ref}
        intensity={0.7}
        contactShadow={false}
        >
        <Model />
      </Stage>
    </Suspense>
    <OrbitControls ref={ref} enablePan={true} enableZoom={false} enableRotate={true} />
  </Canvas>
</div>

  );
}
