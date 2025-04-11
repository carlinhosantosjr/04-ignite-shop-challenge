import { createContext, ReactNode, useState } from 'react'
import { ProductProps } from '../pages/product/[id]'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  addProduct: (product) => void
  shoppingCart: ProductProps[]
  removeProduct: (id) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ProductProps[]>([])

  function addProduct(product) {
    setShoppingCart((state) => [...state, product])
  }

  function removeProduct(id) {
    const novoArray = shoppingCart.filter(itemCart => itemCart.id !== id)
    setShoppingCart(novoArray)
  }

  return (
    <ShoppingCartContext.Provider
      value={{ addProduct, shoppingCart, removeProduct }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
