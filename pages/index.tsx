import Router from 'next/router';
import { useEffect } from 'react';
// import { useContext } from 'react';
//import { UserContext } from '@lib/UserContext';

// import { Loading } from '@components/Loading';
import { Text } from '@design-system/text';

import { styled } from '@stitches/react';

const StatusBox = styled('div', {
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

const Home = () => {
  // const [user] = useContext(UserContext);

  useEffect(() => {
    Router.replace('/cover');
  });

  return null;

  {
    /*
  return (
    <div>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <StatusBox>
            <Text size="2" css={{}}>
              You're logged in!
            </Text>
          </StatusBox>
        )
      )}
    </div>
  );
};
*/
  }
};

export default Home;
