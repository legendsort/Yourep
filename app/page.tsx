export default function Page({
  searchParams,
}: {
  searchParams?: { url: string };
}) {
  const url = searchParams?.url ? searchParams.url : '';

  return (
    <div className='p-12 text-xl font-bold'>
      <a href='/6b5a424d04d39ac4aa3b4e25d3a8165d882bb92d218891f8b8f52bf22f7daf6c'>
        👉 CLICK HERE for user profile page
      </a>
    </div>
  );
}
