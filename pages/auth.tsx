import { useContext } from 'react';
import { UserContext } from '@lib/UserContext';
import { Loading } from '@components/Magic/Loading';
import { Header } from '@components/Magic/Header';
import { Text } from '@design-system/text';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  alignItems: 'center',
  margin: 'auto',
  padding: '1rem',

  backgroundColor: '$white',
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
              <Text size="3" css={{ color: '$gray12', fontFamily: '$neuewide', fontWeight: '700' }}>
                YOU'RE IN.
              </Text>
            </CoverBox>
          </>
        )
      )}
    </>
  );
};

export default Auth;
