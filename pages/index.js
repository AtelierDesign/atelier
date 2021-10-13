import Layout from '../components/layout';

export default function Atelier() {
  return (
    <>
    <div className="canvas">
      <video className="video" playsInline autoPlay muted loop crossOrigin="true">
        <source src="/above.mp4" type="video/mp4" />
      </video>
      <Layout pageTitle="Atelier®">
        <a href="https://github.com/chvndler">
          <div className="heading_sf">Atelier Design Yield.</div>
        </a>
      </Layout>
    </div>
    </>
  );
}
