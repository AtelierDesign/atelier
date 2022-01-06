import { useEffect, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import { magic } from '@lib/magic';
import { UserContext } from '@lib/UserContext';
import { LoadingSpinner } from '@components/LoadingSpinner';

const Callback = () => {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);

  // REDIRECT CONTAINS A 'PROVIDER' QUERY PARAM / IF USING SOCIAL PROVIDER.
  useEffect(() => {
    router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin();
  }, [router.query]);

  // getRedirectResult()
  // RETURNS AN OBJECT WITH USER DATA FROM MAGIC AND THE SOCIAL PROVIDER.
  const finishSocialLogin = async () => {
    const result = await magic.oauth.getRedirectResult();
    const provider_data = result.oauth.userInfo;
    console.log(provider_data);
    authenticateWithServer(result.magic.idToken);
  };

  // loginWithCredential()
  // RRETURNS A DID TOKEN FOR THE USER
  const finishEmailRedirectLogin = () => {
    if (router.query.magic_credential)
      magic.auth.loginWithCredential().then(didToken => authenticateWithServer(didToken));
  };

  // SEND TOKEN TO SERVER TO VALIDATE
  const authenticateWithServer = async didToken => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${didToken}`,
      },
    });

    if (res.status === 200) {
      // SET THE USER CONTEXT TO THE NOW LOGGED IN USER
      const userMetadata = await magic.user.getMetadata();
      await setUser(userMetadata);
      Router.push('/atelier'); // PUSH TO HOMEPAGE
    }
  };

  return <LoadingSpinner />;
};

export default Callback;
