import { addToCart, removeFromCart } from "./actions";


export const addToCartThunk = (product) => (dispatch) => {
    return dispatch(addToCart(product))

}

export const removeFromCartThunk = (id) => (dispatch) => {
    return dispatch(removeFromCart(id))

   
}