import {Route, Switch} from 'react-router-dom'
import { Home } from '../pages/Home'
import  Cart  from '../pages/Cart'
import { useSelector } from 'react-redux'
import {NavBar} from '../components/NavBar'
import { useEffect, useState } from 'react'

export const Routes = () => {

    const cart = useSelector((state) => state.cart)
  
   

    //const [cartList, setCartList] = useState()
    //setCartList(cart)
    
    
    return (
        <Switch>
            <Route exact path='/'>
                <NavBar />
                <Home />
            </Route>
            <Route path='/cart'>
                <NavBar />
                <Cart />
            </Route>
        </Switch>
    )
}