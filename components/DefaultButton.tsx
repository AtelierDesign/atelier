import { styled } from '../stitches.config';

export const DefaultButton = styled('button', {
  backgroundColor: '$blue9',
  color: 'white',
  paddingLeft: '15px',
  paddingRight: '15px',
  py: '8px',
  height: '40px',
  borderRadius: '12px',
  border: '2px solid',
  borderColor: '$blue7',
  lineHeight: '5',
  width: 'auto',

  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '14px',

  '&:hover': {
    backgroundColor: '$blue8',
    color: 'white',
    cursor: 'pointer'
  }
});
