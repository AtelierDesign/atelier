import { styled } from '../stitches.config';

export const DefaultButton = styled('button', {
  backgroundColor: '$sky11',
  color: 'white',
  paddingLeft: '15px',
  paddingRight: '15px',
  py: '8px',
  height: '40px',
  borderRadius: '12px',
  border: '2px solid',
  borderColor: '$slate8',
  lineHeight: '5',
  width: 'auto',

  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '14px',

  '&:hover': {
    backgroundColor: '$sky10',
    color: 'white',
    cursor: 'pointer'
  }
});
