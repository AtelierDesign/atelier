import Link from 'next/link';
import Image from 'next/image';



export default function Section({ children, ...props }) {

  return (
<section>
  <div className="section__section">
    <div className="section__content">
      {/* Section Elements Here */}
      {children}
    </div>
  </div>
</section>

  );
}
