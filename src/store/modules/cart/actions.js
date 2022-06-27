import { ADD_PRODUCT } from "./actionTypes"
import { REMOVE_PRODUCT } from "./actionTypes"


export const addToCart = (product) => ({type: ADD_PRODUCT, product})

export const removeFromCart = (id) => ({type: REMOVE_PRODUCT, id})