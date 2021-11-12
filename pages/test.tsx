import { styled } from '../stitches.config';
import { Box } from '@design-system/box';
import { ScrollContainer } from '@components/ScrollContainer';

const Card = styled('container', {
  width: '350px',
  minWidth: '350px',
  height: '400px',
  backgroundColor: '$slate3',
  display: 'block',
  position: 'relative',

  borderRadius: '32px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none'
});

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <ScrollContainer>
        <Card>Text</Card>
        <Card>Text</Card>
        <Card>Text</Card>
        <Card>Text</Card>
        <Card>Text</Card>
        <Card>Text</Card>
      </ScrollContainer>
    </Box>
  );
}
