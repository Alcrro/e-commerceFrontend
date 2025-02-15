import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import { StoreProvider } from '@/hooks/AddToContext';
import ThemeProvider from '@/hooks/ThemeProvider';
import { fetchMetadata, IMetadata } from '@/service/metadata/fetchMetadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const params = await fetchMetadata('home');
  if (!params) {
    return { title: 'ALCRRO - Home' };
  }

  return { ...params.data?.metadata, ...params.data?.metadata };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <StoreProvider>
            <div className="main">{children}</div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
