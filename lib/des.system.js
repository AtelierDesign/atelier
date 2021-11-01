import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../components/footer';
import Section from '../components/section';
import Codebox from '../components/codebox';
import ButtonComponents from '../components/buttons/buttoncomps';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



export default function DesignSystem() {

  return (
<>
  <div className="center__div">
    <div className="production__container_lg">
      <h5>ATELIER DESIGN SYSTEM©</h5>
      <p>
        Our libraries and other resources have moved. Please visit us there to view our extensive
        javascript libraries and API documentation.
      </p>
      <br></br>
      <p className="p_dark">
        <Link href="https://developer.ady.world">
          <a>
            {' '}
            <strong>developer.ady.world</strong> ➔
          </a>
        </Link>
      </p>
    </div>
  </div>

  <Footer />
</>

  );
}
