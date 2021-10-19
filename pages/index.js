import Image from 'next/image';
import Layout from '../components/layout';

export default function Atelier() {

  return (
  <>
    <div className="canvas">
     <Video className="video" autoPlay />
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
