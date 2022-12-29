'use client';

export default function DownloadButton({
  item,
  idx,
  igcode,
}: {
  item: any;
  idx: number;
  igcode: string;
}) {
  return (
    <div>
      <button
        className='inline-flex w-full cursor-pointer justify-center items-center px-5 py-2 border border-transparent text-base font-medium rounded-b-md shadow-sm text-white bg-black hover:bg-gray-800'
        type='submit'
        onClick={async () => {
          if (item.media_type == 1) {
            window.open(item.display_url, '_blank');
          } else if (item.media_type == 2) {
            window.open(item.video_url, '_blank');
          }
        }}>
        {item.media_type == 1 ? (
          <>
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
                d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
              />
            </svg>
            Photo
          </>
        ) : (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-1'>
              <path
                strokeLinecap='round'
                d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
            Video
          </>
        )}
      </button>
    </div>
  );
}
