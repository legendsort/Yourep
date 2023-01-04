import Image from 'next/image';
import { abbreviate } from '../utils/utils';
export default function Avatar({ pubid }: { pubid: any }) {
  return (
    <div className='rounded-full'>
      <Image
        height={100}
        width={100}
        alt={abbreviate(pubid) as string}
        src={`https://avatars.dicebear.com/api/adventurer/${pubid}.svg`}
      />
    </div>
  );
}
