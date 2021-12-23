import { styled } from '../stitches.config';

export const DefaultButton = styled('button', {
  backgroundColor: '$orange9',
  color: 'white',
  paddingLeft: '25px',
  paddingRight: '25px',
  py: '8px',
  height: '40px',
  borderRadius: '12px',
  // border: '2px solid',
  border: 'none',
  borderColor: '$slate8',
  lineHeight: '5',
  width: 'auto',

  fontFamily: '$inter',
  fontWeight: '600',
  fontSize: '14px',

  '&:hover': {
    backgroundColor: '$orange8',
    color: 'white',
    cursor: 'pointer',
  },
});
