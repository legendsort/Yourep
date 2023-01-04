import Script from 'next/script';
import Download from '../../../components/Donwload';
import Footer from '../../../components/Footer';
import { supabase } from '../../../utils/supabaseServer';
export const revalidate = 600;

export default async function Index({ params }: { params: any }) {
  const { id } = params;

  async function getData(id: string) {
    const { data, error } = await supabase
      .from('posts')
      .select()
      .eq('id', id)
      .limit(1)
      .single();

    return data;
  }

  const data: any = await getData(id);

  return (
    <div className='flex-col justify-center'>
      <Script id='google-analytics-event' strategy='afterInteractive'>
        {`
        gtag('event', 'conversion', {'send_to': 'AW-11057095293/pm88CImk2oYYEP3Et5gp'});
        `}
      </Script>

      <Download data={data} />
      <div className='mt-12 mx-auto'>
        <Footer />
      </div>
    </div>
  );
}
