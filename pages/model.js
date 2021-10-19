import Layout from '../components/layout';
import Model from '../components/grainModel';
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import ReactDOM from "react-dom"




export default function Design() {
	const ref = useRef()

  return (

<div className="canvas">
  <div className="overlay">
    (h)<a className="overlay__link" href="https://threejs.org"> three.js</a>
    <br></br>
    view source on _<a className="overlay__link" href="https://github.com/chvndler"> github</a>
  </div>

  <Canvas shadows dpr={[1, 2]} camera={{ fov: 60 }}>
    <Suspense fallback={null}>
      <Stage
        controls={ref}
        preset="rembrandt"
        intensity={1}
        environment="city"
      >
        <Model />
      </Stage>
      <EffectComposer>
        <Noise premultiply blendFunction={BlendFunction.ADD} />
      </EffectComposer>
    </Suspense>
  </Canvas>
</div>

  );
}
