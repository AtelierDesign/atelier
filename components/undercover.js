import Image from 'next/image';



export default function Undercover() {
  return (
<>
    <div className="undercover">
    <Image
      src="https://cdn.ady.systems/assets/fabric.jpg"
      alt="One"
      layout="fill"
      objectFit="cover"
    />
  </div>
</>

  );
}
