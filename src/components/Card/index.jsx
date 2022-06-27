import { Container } from "./styles"
import { Button } from '@mui/material'
import { useDispatch } from "react-redux"
import { removeFromCartThunk, addToCartThunk } from "../../store/modules/cart/thunks"

export const Card = ({product, isRemovable = false }) => {

    const dispatch = useDispatch()

    const {id, name, author, price, image} = product

    return (
        <Container>
            <img src={image}/>
            <h3>{name}</h3>
            <p>Autor: {author}</p>
            <span>R$ {price.toFixed(2)}</span>

            {isRemovable ? (
                <Button onClick={() => dispatch(removeFromCartThunk(id))} variant="contained" size='small'>Remover Item</Button>
            ) : (
                <Button onClick={() => dispatch(addToCartThunk(product))} variant="contained" size='small'>Adicionar Item</Button>
            )}
        </Container>
    )    
}