import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MedicalNavbar from './ui/components/MedicalNavbar' // Adjust the import path as needed

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patient Care Portal',
  description: 'Medical History System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar at the top */}
          <MedicalNavbar />
          
          {/* Main content area */}
          <main className="flex-grow bg-gray-50">
            {children}
          </main>
          
          {/* Optional footer can go here */}
        </div>
      </body>
    </html>
  )
}