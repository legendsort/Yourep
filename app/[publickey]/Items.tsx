import Image from 'next/image';
import ClientItems  from '../../components/ClientItems';

export default async function Index({ publickey }: { publickey: any }) {
  return (
      <ClientItems publickey = {publickey} >
      </ClientItems>
  );
}
