import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export default function Subscribe() {

  return (
<>
  <div className="subscribe">
    <div className="subscribe__inner">
        <div className="production__container_lg">
          <div className="input__group">
          <InputGroup size="sm">
            <InputGroup.Text id="inputGroup-sizing-sm"><h5>Subscribe</h5></InputGroup.Text>
            <br></br>
            <FormControl className="glass__input" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Email address" />
          </InputGroup>
          </div>
        </div>
    </div>
  </div>
</>

  );
}
