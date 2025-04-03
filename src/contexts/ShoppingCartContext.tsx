import { createContext, ReactNode, useState } from 'react'
import { ProductProps } from '../pages/product/[id]'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  addProduct: (product) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ProductProps[]>([])

  function addProduct(produto) {
    setShoppingCart((state) => [...state, produto])
    console.log(shoppingCart)
  }

  return (
    <ShoppingCartContext.Provider
      value={{ addProduct }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
