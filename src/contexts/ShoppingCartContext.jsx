import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()
ShoppingCartContext.displayName = "ShoppingCart"

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        quantity,
        setQuantity,
        totalValue,
        setTotalValue
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

