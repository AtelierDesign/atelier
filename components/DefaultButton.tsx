import { styled } from '../stitches.config';

export const DefaultButton = styled('button', {
  backgroundColor: '$blue9',
  color: 'white',
  paddingLeft: '15px',
  paddingRight: '15px',
  height: '35px',
  borderRadius: '12px',
  border: '2px solid',
  borderColor: '$blue7',
  lineHeight: '1',

  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '14px',

  '&:hover': {
    backgroundColor: '$slate9',
    color: 'white',
    cursor: 'pointer'
  }
});