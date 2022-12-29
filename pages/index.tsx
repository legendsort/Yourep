import type { NextPage } from 'next';
import Link from 'next/link';
import DownloadButton from '../components/DownloadButton';
import { data } from '../data/data';
const Home: NextPage = () => {
  const { media, igcode } = data;
  const getMediaUrl = (item: any) => {
    return item.media_type == 1 ? item.display_url : item.video_url;
  };
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      {media.map((item: any, idx: number) => (
        <div
          key={idx}
          className='relative my-2 w-full bg-black bg-opacity-50 rounded-md bg-cover bg-center'>
          <img
            src={item.display_url}
            alt={item.igcode + '-' + idx}
            className='blur-lg opacity-80 p-5 absolute inset-0 -z-10 rounded-md w-full h-full mx-auto shadow-md'
          />

          <Link href={getMediaUrl(item)} as={getMediaUrl(item)} target='_blank'>
            <div className='relative'>
              <img
                alt={item.igcode + '-' + idx}
                src={item.display_url}
                className='h-72 sm:h-96 mx-auto shadow-md rounded-t-md sm:rounded-none'
              />

              {item.media_type == 2 && (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-16 h-16 bg-black rounded-full p-2 opacity-60'>
                    <path
                      strokeLinecap='round'
                      d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                    />
                  </svg>
                </div>
              )}
            </div>
          </Link>

          <DownloadButton item={item} idx={idx} igcode={igcode} />
        </div>
      ))}
    </div>
  );
};

export default Home;
