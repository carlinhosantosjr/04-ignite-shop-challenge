import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Header } from '@/src/components/Header'
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { Container } from '../styles/pages/app'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}
