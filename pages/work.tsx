import Image from 'next/image';
import { FooterMain } from '@ui/app/FooterMain';
import { Box } from '@atelier/box';
import { Text } from '@atelier/text';
import { GridCollapse } from '@components/sections/GridCollapse';

// STITCHES.DEV
import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$slate3',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '10px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none',
  height: '300px',
});

const SmallButton = styled('button', {
  borderRadius: '6px',
  height: 'auto',
  marginLeft: '-1px',
  marginTop: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '1.2',
  width: 'auto',
  bc: '$slate4',
  border: '1px solid',
  borderColor: '$slate10',

  '&:hover': {
    backgroundColor: '$slate8',
    cursor: 'pointer',
  },
});

// APP BEGIN / WELCOME (Newsletter Success Redirect)
const Work = () => {
  return (
    <>
      <GridCollapse>
        {/* ROW ONE */}
        {/* CARD.001 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* CARD.002 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* CARD.003 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* CARD.004 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* <!-- <!-- <!-- ROW TWO --> --> --> */}
        {/* CARD.001 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* CARD.002 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* CARD.003 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>

        {/* CARD.004 */}
        <Box>
          <Card>
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </Card>
          <Box css={{ position: 'relative', margin: '8px' }}>
            <Text size="2" css={{ fontWeight: '600', lineHeight: '1.5' }}>
              Ady® Interval
            </Text>
            <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
              Shop early for the best selection of holiday favorites.
              <br />
            </Text>
          </Box>
        </Box>
      </GridCollapse>

      <FooterMain />
    </>
  );
};

export default Work;
