import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes"

export const cartReducer = (state = JSON.parse(localStorage.getItem('@Cart')) || [], action) =>{
    
    

    switch (action.type){
        case ADD_PRODUCT:
            const { product } = action
    
          
            return [...state, product]
            
        case REMOVE_PRODUCT:
            const { cartList } = action

            return cartList

        default:
            return state
    }
    
}