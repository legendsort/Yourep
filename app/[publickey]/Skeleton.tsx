function Skeleton() {
  return (
    <div
      className={`h-72 sm:h-96 w-full rounded-md bg-white/5 animate-pulse`}></div>
  );
}

export function MultiSkeleton() {
  return (
    <div className='flex-cols items-center justify-center'>
      <div className='grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
