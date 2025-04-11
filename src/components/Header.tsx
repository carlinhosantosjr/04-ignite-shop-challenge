import logoImg from '@/src/assets/logo.svg'
import {
  BadgeBag,
  HeaderContainer,
  ShoppingBagButton,
} from '@/src/styles/components/header'
import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog } from 'radix-ui'
import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import { BagCheckout } from './BagCheckout'

export function Header() {
  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <Dialog.Root>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Dialog.Trigger asChild>
          <ShoppingBagButton disabled={shoppingCart.length === 0}>
            <Handbag size={26} color="white" />
            {shoppingCart.length !== 0
              ? <BadgeBag>{shoppingCart.length}</BadgeBag>
              : ''}

          </ShoppingBagButton>
        </Dialog.Trigger>
        <BagCheckout />
      </Dialog.Root>
    </HeaderContainer>
  )
}
