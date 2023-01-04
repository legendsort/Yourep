import Script from 'next/script';
import Navbar from '../components/Navbar';
import { UserProvider } from '../context/userContext';
import '../styles/globals.css';
import { AnalyticsWrapper } from './components/analytics';
import Toast from './Toast';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-1QYVJWCMT1'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-1QYVJWCMT1');
          `}
      </Script>
      <body>
        <div className='max-w-6xl mx-auto'>
          <UserProvider>
            <Navbar />
            {children}
          </UserProvider>
          <Toast />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
