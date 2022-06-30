import { addToCart, removeFromCart } from "./actions";


export const addToCartThunk = (product) => (dispatch) => {

    const cart = JSON.parse(localStorage.getItem('@Cart')) || [] 

    const productExist = cart.every((elem) => elem.id !== product.id)
    if(productExist){
        cart.push(product)
        localStorage.setItem('@Cart', JSON.stringify(cart))
        dispatch(addToCart(product))
    }
    
    

     
}


export const removeFromCartThunk = (id) => (dispatch, getStore) => {

    const {cart} = getStore()
    
   
    const cartList = cart.filter((product) => product.id !== id)
    localStorage.setItem('@Cart', JSON.stringify(cartList))


    dispatch(removeFromCart(cartList))

   
}