import Link from "next/link";



export default function Video({ children, ...props }) {
  return (
    <>
      <video className="video" playsInline autoPlay muted loop crossOrigin="true">
        <source src="/super.mp4" type="video/mp4" />
      </video>
    </>
  );
}
