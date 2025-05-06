import { useContext } from "react"
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext"
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY
} from "@/reducers/shoppingCartReducer"

const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct
})

const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId
})

const updateQuantityAction = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }
})

export const useShoppingCartContext = () => {
  const {
    shoppingCart,
    dispatchShoppingCart,
    quantity,
    totalValue
  } = useContext(ShoppingCartContext)

  function addProduct(newProduct) {
    dispatchShoppingCart(addProductAction(newProduct))
  }

  function subtractProduct(id) {
    const productToSubtract = shoppingCart.find(product => product.id === id)

    if (productToSubtract && productToSubtract.quantity > 1) {
      dispatchShoppingCart(updateQuantityAction(id, -1))
      return
    }

    dispatchShoppingCart(removeProductAction(id))
  }

  function removeProduct(id) {
    dispatchShoppingCart(removeProductAction(id))
  }

  return {
    shoppingCart,
    addProduct,
    subtractProduct,
    removeProduct,
    totalValue,
    quantity
  }
}
