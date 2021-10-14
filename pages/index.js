import Image from 'next/image';
import Layout from '../components/layout';
import styled from 'styled-components';

const Viewport = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

export default function Atelier() {

  return (
  <>
    <Viewport>
      <div className="canvas">
      <video className="video" playsInline autoPlay muted loop crossOrigin="true">
        <source src="/above.mp4" type="video/mp4" />
      </video>
      <Layout pageTitle="Atelier®">
        <a href="https://github.com/chvndler">
          <div className="svg__logo">
            <Image src="/atelier_white.svg" height={100} width={140} />
          </div>
        </a>
      </Layout>
      </div>
    </Viewport>
 </>
  );
}
