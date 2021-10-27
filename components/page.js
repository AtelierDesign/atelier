import Link from 'next/link';
import Image from 'next/image';





export default function Page({ children, ...props }) {

  return (
<>
  <div className="page">
    <div className="page__inner" {...props}>
      {/* Hero Title - use h1, h2, or h3 */}
      {/* Body Text - use .p */}
      <div>{children}</div>
    </div>
  </div>
</>

  );
}
