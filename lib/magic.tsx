import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const createMagic = (key: any) => {
  return (
    typeof window !== 'undefined' &&
    new Magic(key, {
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_KEY);

/**
// Setting network to Optimism Testnet
export const magicOptimism = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, { network: customNodeOptions });
magicOptimism.network = 'optimism'

export const web3Optimism = new Web3(magicOptimism.rpcProvider);


// NOTE: when connecting to a testnet, TEST API keys must be used from the Magic dashboard (live API keys for mainnet)

// Setting network to Ethereum (Ropsten Testnet)
export const magicEthereum = new Magic(process.env.REACT_APP_MAGIC_PUBLISHABLE_KEY, { network: 'kovan' });
magicEthereum.network = 'ethereum'

export const web3Ethereum = new Web3(magicEthereum.rpcProvider);
*/
