import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SheraTech | Digital Agency',
  description: 'UGC, CGI, Ads, Google Ads, Meta Ads & Website Design services',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* You can add a Navbar here */}
        {children}
        {/* You can add a Footer here */}
      </body>
    </html>
  );
}
