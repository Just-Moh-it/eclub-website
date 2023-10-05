import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrepreneurship Club at Virginia Tech',
  description: "Where Entrepreneurship Becomes Community Right at the center of Virginia Tech's startup ecosystem, we bridge gaps between students, industry leaders, and startups that are building spectacular products.",
  icons: {
    icon: "./app/assets/logo.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark'>
      <body className={`${inter.className} w-11/12 mx-auto`}> 
        <NavBar></NavBar>
        {children}
        <Analytics></Analytics>
      </body>
    </html>
  )
}
