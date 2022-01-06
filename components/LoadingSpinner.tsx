import React from 'react';
import ReactLoading from 'react-loading';

import { styled } from '@stitches/react';

const LoadingBox = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

const CenterDiv = styled('div', {
  alignItems: 'center',
  textAlign: 'center',
});

export const LoadingSpinner = ({ type, color }) => {
  return (
    <LoadingBox>
      <CenterDiv>
        <ReactLoading
          className="react-loader"
          type={'bars'}
          color={'#000'}
          height={50}
          width={50}
        />
      </CenterDiv>
    </LoadingBox>
  );
};

export default LoadingSpinner;
