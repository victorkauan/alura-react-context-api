import { createContext, useEffect, useMemo, useReducer, useState } from "react"
import { shoppingCartReducer } from "@/reducers/shoppingCartReducer"

export const ShoppingCartContext = createContext()
ShoppingCartContext.displayName = "ShoppingCart"

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, dispatchShoppingCart] = useReducer(shoppingCartReducer, [])
  const [quantity, setQuantity] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  const { temporaryTotalValue, temporaryQuantity } = useMemo(
    () => shoppingCart.reduce(
      (accumulator, shoppingCartItem) => ({
        temporaryTotalValue: accumulator.temporaryTotalValue + shoppingCartItem.price * shoppingCartItem.quantity,
        temporaryQuantity: accumulator.temporaryQuantity + shoppingCartItem.quantity
      }),
      { temporaryTotalValue: 0, temporaryQuantity: 0 }
    ),
    [shoppingCart]
  )

  useEffect(() => {
    setTotalValue(temporaryTotalValue)
    setQuantity(temporaryQuantity)
  })

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        dispatchShoppingCart,
        quantity,
        totalValue
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

