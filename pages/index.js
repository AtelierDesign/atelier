import Image from 'next/image';
import Layout from '../components/layout';

export default function Atelier() {

  return (
  <>
    <div className="canvas">
<<<<<<< Updated upstream
      <video className="video" playsInline autoPlay muted loop crossOrigin="true">
        <source src="/flow_purple.mp4" type="video/mp4" />
      </video>
=======
     <Video className="video" autoPlay />
>>>>>>> Stashed changes
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
