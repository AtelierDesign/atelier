import Link from 'next/link';
import Image from 'next/image';





export default function Hero({ children, ...props }) {

  return (
  <>
  <div className="hero">
    <div className="hero__inner">
    {/* Hero Title - use h1, h2, or h3 */}
    {/* Body Text - use .p */}

        <div>{children}</div>

    </div>
  </div>
  </>
  );
}
