import { useContext, useEffect, useMemo } from "react"
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext"

export const useShoppingCartContext = () => {
  const {
    shoppingCart,
    setShoppingCart,
    quantity,
    setQuantity,
    totalValue,
    setTotalValue
  } = useContext(ShoppingCartContext)

  function getUpdatedShoppingCart(id, quantity) {
    return shoppingCart.map(product => {
      if (product.id === id) {
        product.quantity += quantity
      }

      return product
    })
  }

  function addProduct(newProduct) {
    const hasProduct = shoppingCart.some((product) => product.id === newProduct.id)

    if (!hasProduct) {
      newProduct.quantity = 1
      return setShoppingCart(previous => [...previous, newProduct])
    }

    const updatedShoppingCart = getUpdatedShoppingCart(newProduct.id, 1)
    setShoppingCart([...updatedShoppingCart])
  }

  function subtractProduct(id) {
    const productToRemove = shoppingCart.find(product => product.id === id)
    const isLastUnit = productToRemove.quantity === 1

    if (isLastUnit) {
      return setShoppingCart(previous => previous.filter(product => product.id !== id))
    }

    const updatedShoppingCart = getUpdatedShoppingCart(id, -1)
    setShoppingCart([...updatedShoppingCart])
  }

  function removeProduct(id) {
    const filteredShoppingCart = shoppingCart.filter(product => product.id !== id)
    setShoppingCart(filteredShoppingCart)
  }

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

  return {
    shoppingCart,
    setShoppingCart,
    addProduct,
    subtractProduct,
    removeProduct,
    totalValue,
    quantity
  }
}
