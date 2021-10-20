import Image from 'next/image';
import Layout from '../components/layout';
import Video from '../components/video';

export default function Index() {

  return (
  <>
    <div className="canvas">
     <Video />
      <Layout pageTitle="Atelier®">
        <a href="https://github.com/chvndler">
          <div className="svg__logo">
            <Image src="/svg/atelier_white.svg" alt="Atelier Design Yield®" height={50} width={140} />
          </div>
        </a>
      </Layout>
    </div>
 </>

  );
}
