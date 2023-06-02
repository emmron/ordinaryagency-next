import './globals.css'
import { Inter } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ordinary Agency',
  description: 'Digital Agency in West Perth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </head>
      <body className={inter.className}><div id="my-root">{children}</div></body>
    </html>
  )
}
