export default function Meta({
  title = 'Instagram download photos, videos and reels on YouRep',
  description = 'YouRep makes it easy to download and share Instagram photos, videos and reels. Perfect for saving and sharing with family and friends.',
  image = '/yourep-splash.png',
}) {
  return (
    <>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@yourep_com' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </>
  );
}
