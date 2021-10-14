import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

export default class Viewport {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
   <div className="viewport">
     <Layout />
   </div>
  );
}
