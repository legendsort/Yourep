import { File, Web3Storage } from 'web3.storage';

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() } as any);
}

export async function uploadFromURL(url: string, id: string) {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL');
  }

  const response = await fetch(url as any);
  const data = await response.arrayBuffer();

  const client = makeStorageClient();
  const cid = await client.put([new File([data], `${id}.jpg`)], {
    wrapWithDirectory: false,
  });

  console.log(cid);

  return `https://w3s.link/ipfs/${cid}`;
}
