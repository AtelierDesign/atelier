import Image from 'next/image';
import Layout from '../components/layout';
import Fsp from '../components/fsp';


export default function FreeSample() {

  return (
  <>
  <video className="video" playsInline autoPlay muted loop crossOrigin="true">
    <source src="/cherry_flower.mp4" type="video/mp4" />
  </video>
    <Layout pageTitle="Free Sample">
      <Fsp />
    </Layout>
  </>
  );
}
