import Image from 'next/image';



export default function Undercover() {
  return (
<>
    <div className="undercover">
    <Image
      src="https://cdn.ady.systems/assets/bubble_01a.jpg"
      alt="One"
      layout="fill"
      objectFit="cover"
    />
  </div>
</>

  );
}
