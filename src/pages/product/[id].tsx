import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

import { ShoppingCartContext } from '@/src/contexts/ShoppingCartContext'
import { priceConverter } from '@/src/utils/priceConverter'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

export default function Product(product : ProductProps) {
  const { addProduct, shoppingCart } = useContext(ShoppingCartContext)

  const disableButton =
    shoppingCart.some(itemCart => itemCart.id === product.id)

  function handleAddProduct() {
    addProduct(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={disableButton}
            onClick={handleAddProduct}
          >
            {disableButton
              ? 'No carrinho'
              : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_S0doHSg9PsUcbh' },
      },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<unknown, { id: string }> =
  async ({ params }) => {
    const productId = params
      ? params.id
      : ''

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
      props: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount
          ? priceConverter(price.unit_amount / 100)
          : 0,
        description: product.description,
        defaultPriceId: price.id,
      },
      revalidate: 60 * 60 * 1,
    }
  }
