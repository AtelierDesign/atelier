import Head from 'next/head';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import Model from '../components/model';
import Image from 'next/image';



export default function Index() {
  const ref = useRef()

  return (

  <div className="canvas">
    <Head>
      <title>Atelier®</title>
    </Head>

    <div className="overlay">
      (a®)
      <a className="overlay__link" href="https://threejs.org"> three.js
      </a>
      <br></br>
      view source on _
      <a className="overlay__link" href="https://github.com/chvndler"> github
      </a>
      <br></br>
      <br></br>
      <a className="overlay__big" href="https://threejs.org">
        {" "}
        Atelier Design Yield®
      </a>

    </div>
    <div className="invisible lg:visible">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 120 }}>
        <Suspense fallback={null}>
          <Environment background={true} files={'/hdr/park.hdr'} />
          <Stage controls={ref} preset="soft" intensity={2} contactShadow={false} environment="park">
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
  </div>

  <div className="visible lg:invisible">
    <div className="center__div">
<Image
  src="/svg/adyady.svg"
  width={90}
  height={120}
  alt="back"
/>
</div>
  </div>
</div>


  );
}
