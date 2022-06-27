import { Card } from "../../components/Card"
import { useSelector } from "react-redux"
import { Grid } from '@mui/material'
import { Container } from "./style"

const Cart = () => {
    
    const cartList = useSelector(({cart}) => cart)
    console.log(cartList)
  

    return (
        <Container>
            <Grid container spacing={2} width='90vw'>
            {cartList?.map((product) => <Grid item xs={3}><Card product={product} isRemovable/></Grid>)}
            </Grid>
        </Container>
    )

}

export default Cart 