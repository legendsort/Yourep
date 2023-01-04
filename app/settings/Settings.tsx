'use client';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { UserContextType } from '../../@types/user';
import Avatar from '../../components/Avatar';
import BackupUser from '../../components/BackupUser';
import ImportUser from '../../components/ImportUser';
import ShareBox from '../../components/ShareBox';
import { UserContext } from '../../context/userContext';
import { generateKeys } from '../../utils/nostr';
import { toastSettings } from '../../utils/toast';

export default function Settings() {
  const sharingUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { user, setUser } = useContext(UserContext) as UserContextType;

  const key = Math.random().toString(36).substring(7);

  return (
    <>
      {user.loggedIn && (
        <>
          <div className='w-36'>
            <Avatar pubid={user.publickey} />
          </div>

          <div className='mb-3'>
            <ShareBox
              sharing={`${sharingUrl}/${user.publickey}`}
              label='YouRep Link'
            />
          </div>
        </>
      )}

      {!user.loggedIn && (
        <div className='mb-4 w-full'>
          <div className='alert bg-none rounded-xl text-white shadow-lg'>
            <div>
              <div className='flex flex-col sm:flex-row items-center justify-centerfont-medium'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 mr-1.5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
                    />
                  </svg>
                  Create user to track activity
                </div>
                <div className='m-2 bg-black/10 text-pink-500 border p-1 border-pink-500 rounded-md font-bold'>
                  Save your private keys!
                </div>
              </div>

              <div
                className='btn btn-secondary normal-case'
                onClick={() => {
                  setUser({
                    publickey: user.publickey,
                    privatekey: user.privatekey,
                    loggedIn: true,
                  });
                  toast('😎 Have fun!', toastSettings as any);
                }}>
                Ok 👌
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className='btn btn-primary w-full normal-case'
        onClick={() => {
          const { publickey, privatekey } = generateKeys();
          setUser({ publickey, privatekey, loggedIn: true });
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 mr-1'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
          />
        </svg>
        New User
      </button>
      {user.loggedIn && (
        <div className='mt-4'>
          <label
            className='btn btn-primary w-full normal-case'
            htmlFor='backup-user'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-1'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
              />
            </svg>
            Save User
          </label>
        </div>
      )}
      <div className='mt-4'>
        <label
          className='btn btn-primary w-full normal-case'
          htmlFor='import-user'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 mr-1'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
          Load User
        </label>
      </div>
      {user.loggedIn && (
        <button
          onClick={() => {
            toast.success('Logged out', toastSettings as any);
            setUser({
              publickey: user.publickey,
              privatekey: user.privatekey,
              loggedIn: false,
            });
          }}
          className='mx-auto w-full my-4 btn btn-ghost normal-case text-center'>
          <h2 className='flex items-center text-base font-light'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-1'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
              />
            </svg>
            Logout
          </h2>
        </button>
      )}

      <BackupUser privatekey={user.privatekey} />
      <ImportUser setUser={setUser} />
    </>
  );
}
