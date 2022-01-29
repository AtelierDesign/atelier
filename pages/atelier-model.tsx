import Head from 'next/head';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import { AtelierModel } from '@components/three/AtelierModel';
import { ThemeSwitch } from '@ui/app/ThemeSwitch';

import { styled } from '@stitches/react';

const ThemeTogglePlacement = styled('div', {
  position: 'absolute',
  zIndex: '9999',
  top: '0',
  height: 'auto',
  margin: 'auto',
  textAlign: 'center',
  alignItems: 'center',
  paddingTop: '40px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingBottom: '10px',
});

const CanvasContainer = styled('div', {
  backgroundColor: '$translucent',
  position: 'relative',
  zIndex: '3',
  width: '100%',
  maxWidth: '100vw',
  height: '100%',
  maxHeight: '100vh',
  margin: '0',
  padding: '0',
});

export default function Index() {
  const ref = useRef();

  return (
    <div>
      <Head>
        <title>three®</title>
      </Head>

      <ThemeTogglePlacement>
        <ThemeSwitch />
      </ThemeTogglePlacement>

      {/*three.js Canvas*/}
      <CanvasContainer>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 120 }}>
          <Suspense fallback={'Loading...'}>
            <Stage controls={ref} preset="soft" intensity={3} contactShadow={false} environment="park">
              <AtelierModel />
            </Stage>
          </Suspense>
          <OrbitControls ref={ref} autoRotate />
        </Canvas>
      </CanvasContainer>
      {/*three.js Canvas End*/}
    </div>
  );
}

// export default Atelier3d;
