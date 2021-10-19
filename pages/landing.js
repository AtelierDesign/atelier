import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Landing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Landing;
