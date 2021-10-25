import Image from 'next/image';
import Cover from '../components/cover';





export default function Welcome() {
  return (
    <>
      <Cover>
        <div className="center__div">
          <h1>Enter.</h1>
        </div>
        <Image
          src="https://cdn.ady.systems/assets/circuit_desktop.jpg"
          alt="cover"
          layout="fill"
          objectFit="cover"
        />
      </Cover>
    </>
  )
}
