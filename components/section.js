import Link from 'next/link';
import Image from 'next/image';



export default function Section({ children, ...props }) {

  return (
  <>
  <div className="section">
    <div className="section__content">
    {/* Section Elements Here */}
      <section>{children}</section>
    </div>
  </div>
  </>
  );
}
