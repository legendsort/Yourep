import Navbar from '../components/Navbar';
import { UserProvider } from '../context/userContext';
import '../styles/globals.css';
import { AnalyticsWrapper } from './components/analytics';
import Toast from './Toast';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
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
