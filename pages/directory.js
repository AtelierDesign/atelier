import Image from 'next/image';
import Layout from '../components/layout';

export default function Directory() {

  return (
  <>
    <div className="canvas">
    {/* No
      <video className="video" playsInline autoPlay muted loop crossOrigin="true">
        <source src="/flow_purple.mp4" type="video/mp4" />
      </video>
      */}
      <Layout pageTitle="Atelier®">
        <a href="https://github.com/chvndler">
          <div className="svg__logo">
            <Image src="/atelier_white.svg" alt="Atelier Design Yield®" height={100} width={140} />
          </div>
        </a>
      </Layout>
    </div>
 </>
  );
}
