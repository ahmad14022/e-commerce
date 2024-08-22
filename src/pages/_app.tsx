import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <div className={poppins.className}>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
