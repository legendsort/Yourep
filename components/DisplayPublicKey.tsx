'use client';
import { useState } from 'react';
import { abbreviate } from '../utils/utils';

export default function DisplayPublicKey({ publickey }: { publickey: string }) {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className='text-xs text-gray-500 truncate'>
      {show ? publickey : abbreviate(publickey as string)}
    </div>
  );
}
