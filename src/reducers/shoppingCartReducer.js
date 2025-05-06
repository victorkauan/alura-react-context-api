export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const UPDATE_QUANTITY = "UPDATE_QUANTITY"

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.payload
      const product = state.findIndex(item => item.id === newProduct.id)

      if (product === -1) {
        newProduct.quantity = 1
        return [...state, newProduct]
      } else {
        return state.map((item, index) =>
          index === product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

    case REMOVE_PRODUCT:
      const productId = action.payload
      return state.filter(item => item.id !== productId)

    case UPDATE_QUANTITY:
      const { productId: id, quantity } = action.payload
      return state.map((item) => 
        item.id === id ? { ...item, quantity } : item
      )

    default:
      return state
  }
}
