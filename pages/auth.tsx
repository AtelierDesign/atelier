import { useContext } from 'react';
import { UserContext } from '@lib/UserContext';
import Loading from '@components/Magic/Loading';
import Header from '@components/Magic/Header';
import FooterMain from '@components/FooterMain';
import { Text } from '@design-system/text';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100%',
  backgroundColor: '$gray12',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  backdropFilter: 'invert(10%) blur(10px)',
  saturate: '300%',

  overflowY: 'hidden',
  overflowX: 'hidden',
});

const Auth = (): JSX.Element => {
  const [user] = useContext(UserContext);

  return (
    <>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            <Header />
            <CoverBox>
              <Text size="1" css={{ color: '$white' }}>
                You're now logged in!
              </Text>
            </CoverBox>

            <FooterMain />
          </>
        )
      )}
    </>
  );
};

export default Auth;
