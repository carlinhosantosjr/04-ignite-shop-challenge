import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}
