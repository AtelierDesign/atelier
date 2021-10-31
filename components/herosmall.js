import Link from 'next/link';
import Image from 'next/image';





export default function HeroSmall({ children, ...props }) {

  return (
<>
  <div className="hero__small">
    <div className="hero__sm__inner"  {...props}>
      {/* Hero Title - use h1, h2, or h3 */}
      {/* Body Text - use .p */}
      <div>
      {children}
      </div>
    </div>
  </div>
</>

  );
}
