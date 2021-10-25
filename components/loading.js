import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';


export default function Loading() {
  const currentTime = moment().format('LTS')

  return(
<>
  <div className="clock">
    <Moment format="hh:mm:ss" interval={1000}></Moment>
  </div>
</>

  );
}
