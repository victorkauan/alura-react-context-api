import { useContext } from "react"
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext"

export const useShoppingCartContext = () => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  function getUpdatedShoppingCart(id, quantity) {
    return shoppingCart.map(product => {
      if (product.id === id) {
        product.quantidade += quantity
      }

      return product
    })
  }

  function addProduct(newProduct) {
    const hasProduct = shoppingCart.some((product) => product.id === newProduct.id)

    if (!hasProduct) {
      newProduct.quantidade = 1
      return setShoppingCart(previous => [...previous, newProduct])
    }

    const updatedShoppingCart = getUpdatedShoppingCart(newProduct.id, 1)
    setShoppingCart([...updatedShoppingCart])
  }

  function subtractProduct(id) {
    const productToRemove = shoppingCart.find(product => product.id === id)
    const isLastUnit = productToRemove.quantidade === 1

    if (isLastUnit) {
      return setShoppingCart(previous => previous.filter(product => product.id !== id))
    }

    const updatedShoppingCart = getUpdatedShoppingCart(id, -1)
    setShoppingCart([...updatedShoppingCart])
  }

  return {
    shoppingCart,
    setShoppingCart,
    addProduct,
    subtractProduct
  }
}
