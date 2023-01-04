import Settings from './Settings';

export default function Page() {
  return (
    <div className='sm:px-6 px-2 mt-6'>
      <div className='p-8 w-full rounded-lg bg-neutral'>
        <h1 className='text-2xl mb-3 font-bold text-white'>Settings</h1>
        <Settings />
      </div>
    </div>
  );
}
