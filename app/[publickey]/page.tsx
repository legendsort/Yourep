import { Suspense } from 'react';
import Avatar from '../../components/Avatar';
import DisplayPublicKey from '../../components/DisplayPublicKey';
import Items from './Items';
import { MultiSkeleton } from './Skeleton';

export default async function Index({ params }: { params: any }) {
  const { publickey } = params;

  return (
    <>
      <div className='sm:px-6 px-4 mt-6 mb-16'>
        <div className='pb-6'>
          <h1 className='flex items-center text-2xl font-bold text-white'>
            <div className='w-16 mr-2'>
              <Avatar pubid={publickey} />
            </div>

            <div>
              <div>You</div>
              <DisplayPublicKey publickey={publickey} />
            </div>
          </h1>
        </div>

        <Suspense fallback={<MultiSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <Items publickey={publickey} />
        </Suspense>
      </div>
    </>
  );
}
