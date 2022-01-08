import { useContext } from 'react';
import { UserContext } from '@lib/UserContext';
import { Loading } from '@components/Magic/Loading';

import { UserNavbar } from '@components/Magic/UserNavbar';
import { Container } from '@design-system/container';
import { Text } from '@atelier-dsgn/text';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

const Profile = () => {
  const [user] = useContext(UserContext);

  return (
    <>
      <UserNavbar />
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            <CoverBox>
              <Container size="2" css={{ color: '$gray11', textAlign: 'left' }}>
                <Text css={{ fontSize: '16px', fontFamily: '$inter', lineHeight: '2', fontWeight: '800' }}>EMAIL:</Text>
                <Text css={{ fontSize: '11px', fontFamily: '$jetbrain' }}>{user.email}</Text>

                <Text css={{ fontSize: '16px', fontFamily: '$inter', lineHeight: '2', fontWeight: '800' }}>
                  USER ID:
                </Text>
                <Text css={{ fontSize: '11px', fontFamily: '$jetbrain' }}>{user.issuer}</Text>
              </Container>
            </CoverBox>
          </>
        )
      )}
    </>
  );
};

export default Profile;
