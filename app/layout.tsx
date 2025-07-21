// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MedicalNavbar } from './ui/components/MedicalNavbar';
import { Footer } from './ui/components/Footer';
import { AppThemeProvider } from './ui/components/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Patient Care Portal',
  description: 'Medical History System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <AppThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Navbar at the top with shadow */}
            <MedicalNavbar />
            
            {/* Main content area with proper spacing */}
            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 bg-white">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            
            {/* Footer with seamless connection */}
            <Footer />
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
}