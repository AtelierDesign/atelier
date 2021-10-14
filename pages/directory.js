
import TopLayout from '../components/top_layout';
import Image from 'next/image';

export default function Directory() {

  return (
  <>
    {/* No
      <video className="video" playsInline autoPlay muted loop crossOrigin="true">
        <source src="/flow_purple.mp4" type="video/mp4" />
      </video>
      */}
    <TopLayout pageTitle="Atelier®">
      <a href="https://github.com/chvndler">
        <div className="svg__logo">
          <Image src="/atelier_white.svg" alt="Atelier Design Yield®" height={40} width={110} />
        </div>
      </a>
    </TopLayout>
    <div className="center__links">
    <a href="https://github.com/chvndler">One</a>
    </div>
 </>
  );
}
