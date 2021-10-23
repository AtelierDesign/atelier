import Link from 'next/link';
import Image from 'next/image';



export default function Cta({ children, ...props }) {

  return (
  <>
  <div className="cta__wrapper">
    <div className="cta__content">
    {/* Cta Elements Here */}
      <div>{children}</div>
    </div>
  </div>
  </>
  );
}
