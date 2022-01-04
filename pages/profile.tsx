import { useContext } from 'react';
import { UserContext } from '@lib/UserContext';
import { Loading } from '@components/Magic/Loading';

import { Navbar } from '@components/Navbar';

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
      <Navbar />
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            <CoverBox>
              <div className="label">Email</div>
              <div className="profile-info">{user.email}</div>

              <div className="label">User Id</div>
              <div className="profile-info">{user.issuer}</div>
            </CoverBox>
          </>
        )
      )}
    </>
  );
};

export default Profile;
