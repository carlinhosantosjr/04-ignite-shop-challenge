import { X } from '@phosphor-icons/react'
import axios from 'axios'
import Image from 'next/image'
import { Dialog } from 'radix-ui'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import {
  BagCheckoutContainer,
  FinishCheckoutButton,
  ImageProductBagContainer,
  InfoProductBagContainer,
  ModalCloseButton,
  ProductBag,
  ProductBagContainer,
  ProductBagContainerFooter,
  RemoveButtonInfoProduct,
} from '../styles/components/bagCheckout'
import { priceConverter } from '../utils/priceConverter'

export function BagCheckout() {
  const { shoppingCart, removeProduct } = useContext(ShoppingCartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const totalAmount = shoppingCart.reduce((total, item) => {
    const price =
      parseFloat(item.price.replace(/[^\d,]/g, '').replace(',', '.'))
    return total + price
  }, 0)

  const bagItens = shoppingCart.map((item) => {
    return item.defaultPriceId
  })

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        bagItens,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert(`${err} Falha ao redirecionar ao checkout!`)
    } finally {
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <BagCheckoutContainer>
      <ModalCloseButton>
        <X size={24} />
      </ModalCloseButton>
      <Dialog.Title>Sacola de compras</Dialog.Title>
      <ProductBagContainer>
        {shoppingCart
          ? shoppingCart.map((product) => (
            <ProductBag key={product.id}>
              <ImageProductBagContainer>
                <Image src={product.imageUrl} width={110} height={100} alt="" />
              </ImageProductBagContainer>
              <InfoProductBagContainer>
                <p>{product.name}</p>
                <span>{product.price}</span>
                <RemoveButtonInfoProduct
                  onClick={() => removeProduct(product.id)}
                >
                  Remover
                </RemoveButtonInfoProduct>
              </InfoProductBagContainer>
            </ProductBag>
            ))
          : ''}
      </ProductBagContainer>
      <ProductBagContainerFooter>
        <span>Quantidade</span>
        {shoppingCart.length !== 1
          ? <span>{shoppingCart.length} itens</span>
          : <span>{shoppingCart.length} item</span>}
        <p>Valor total</p>
        <p>{priceConverter(totalAmount)}</p>
        <FinishCheckoutButton
          disabled={shoppingCart.length === 0 || isCreatingCheckoutSession}
          onClick={handleBuyButton}
        >
          Finalizar Compra
        </FinishCheckoutButton>
      </ProductBagContainerFooter>
    </BagCheckoutContainer>
  )
}
