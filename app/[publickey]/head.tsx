import { abbreviate } from '../../utils/utils';
import Meta from '../Meta';

export default function Head({ params }: { params: any }) {
  const publickey = params.publickey;
  const title = 'You ' + abbreviate(publickey) + ' on YouRep';
  const description = `Download and share Instagram media on YouRep! It's free and easy!`;
  const image = `https://avatars.dicebear.com/api/adventurer/${publickey}.svg`;
  return (
    <>
      <Meta title={title} description={description} image={image} />
    </>
  );
}
