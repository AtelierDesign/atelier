import Link from 'next/link';
import Image from 'next/image';





export default function Hero() {

  return (
  <>
  <div className="hero">
    <div className="hero__inner">
    {/*Escape for Now
        <Image src="/svg/atelier_blk.svg" alt="Atelier®" width={180} height={50} />
        */}
        <h1>Welcome.</h1>
      <div className="hero__body">
        <p>An ever– expanding ecosystem of essential design components,</p>
        <p>for artists to empower the new culture of design.</p>
      </div>
    </div>
  </div>
  </>
  );
}
