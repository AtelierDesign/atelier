import Link from 'next/link';
import Image from 'next/image';



export default function Background() {

  return (
  <>
    <Image
      src="https://cdn.ady.systems/assets/44.jpg"
      alt="one"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </>
  );
}
