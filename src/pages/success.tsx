import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '../lib/stripe'
import {
  ImageContainer, ProductsContainer,
  SuccessContainer,
} from '../styles/pages/success'

interface SuccessProps {
  costumerName: string;
  products: {
    name: string;
    images: string[];
    id: string
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ProductsContainer>
          {products.map((product) => (
            <div key={product.id}>
              <ImageContainer>
                <Image
                  src={product.images[0]} width={120} height={110} alt=""
                />
              </ImageContainer>
            </div>
          ))}
        </ProductsContainer>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{costumerName}</strong>,
          sua compra já está a caminho da sua casa.
        </p>
        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details.name
  const products =
  session.line_items.data.map((item) => item.price.product)

  return {
    props: {
      costumerName,
      products,
    },
  }
}
