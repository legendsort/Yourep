import { supabase } from '../../../utils/supabaseServer';
import Meta from '../../Meta';

function parseShortcode(string: string) {
  return string.substring(0, string.length - 65);
}
export default async function Head({ params }: { params: any }) {
  const { data }: { data: any } = await supabase
    .from('posts')
    .select('media, caption')
    .eq('id', params.id)
    .single();

  const { caption, media } = data;
  const title = 'Download ' + parseShortcode(params.id) + ' on YouRep';
  const description = caption.substring(0, 160);
  const image = media[0].display_url;

  return (
    <>
      <Meta title={title} description={description} image={image} />
    </>
  );
}
