import { Card } from "../../components/Card"
import { useSelector } from "react-redux"
import { Grid } from '@mui/material'
import { Container } from "./style"

const Cart = () => {
    
    const cartList = JSON.parse(localStorage.getItem('@Cart'))
   
  

    return (
        <Container>
            <Grid container spacing={2} width='90vw'>
            {cartList?.map((product,index) => <Grid item xs={3}><Card key={product.id} product={product} isRemovable/></Grid>)}
            </Grid>
        </Container>
    )

}

export default Cart 