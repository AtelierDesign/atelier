import Head from 'next/head';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import Material from '../components/material';
import Image from 'next/image';
import Link from 'next/link';



export default function Three() {
    const ref = useRef()

    return (

<div className="canvas">
  <Head>
    <title>Atelier®</title>
  </Head>

  <div className="overlay">
    (a®)
    <a className="overlay__link" href="https://threejs.org">
      {" "}
      three.js
    </a>
    <br></br>
    view source on _
    <a className="overlay__link" href="https://github.com/chvndler">
      {" "}
      github
    </a>
    <br></br>
    <br></br>
    <Link href="/atelier">
      <a className="overlay__big" href="https://threejs.org">
        {" "}
        Atelier Design Yield®
      </a>
    </Link>
  </div>

  {/* three.js Canvas (Desktop Only)*/}

    <Canvas shadows dpr={[1, 2]} camera={{ fov: 120 }}>
      <Suspense fallback={null}>
        <Environment background={false} files={"/hdr/park.hdr"} />
        <Stage
          controls={ref}
          preset="soft"
          intensity={3}
          contactShadow={false}
          environment="park"
        >
          <Material />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>

  {/* three.js canvas End */}


</div>
  );
}
