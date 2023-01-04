import { generatePrivateKey, getPublicKey } from 'nostr-tools';

export const generateKeys = () => {
  const privatekey = generatePrivateKey();
  const publickey = getPublicKey(privatekey);

  return { privatekey, publickey };
};

export const getPublicKeyfromPrivateKey = (privatekey: string) => {
  const publickey = getPublicKey(privatekey);

  return { privatekey, publickey };
};
