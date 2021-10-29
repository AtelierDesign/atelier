import Head from 'next/head';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import Material from '../components/material';
import Time from '../components/time';
import Image from 'next/image';
import Link from 'next/link';

export default function Three() {
    const ref = useRef()

    return (

<div className="canvas">
  <Head>
    <title>three®</title>
  </Head>

  <div className="overlay">
    (ady®)
    <br></br>
    view source _
    <a
      className="overlay__link"
      href="https://github.com/AtelierDesign/atelier"
    >
      {" "}
      github
    </a>


      <div className="overlay__big">
        <Time />
        <Link
          href="https://github.com/AtelierDesign/atelier"
          target="_blank"
          rel="noreferrer"
          >
          <a>Website Opening Soon.</a>
        </Link>
      </div>
  </div>



  {/*three.js Canvas (Desktop Only)*/}
  <div className="invisible lg:visible">
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 120 }}>
      <Suspense fallback={'Loading...'}>
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
  </div>
  {/*three.js Canvas End*/}

  {/*Mobile Only*/}
  <div className="visible lg:invisible">
    <Image
      src="https://cdn.ady.systems/assets/ady_02.gif"
      alt="cover"
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>

  );
}
