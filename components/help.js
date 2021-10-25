import Link from 'next/link';
import Image from 'next/image';



export default function Help({ children, ...props }) {

  return (
<>
  <div className="help__section">
    <div className="help__content">
      {/* Section Elements Here */}
      {children}
    </div>
  </div>
</>

  );
}
