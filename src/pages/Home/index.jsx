import { Card } from "../../components/Card"
import { useSelector } from "react-redux"
import { Grid } from '@mui/material'
import { Container } from "./styles"
import { useState } from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
 const products = useSelector(({products}) => products)



    return (
        <Container>
        <Grid container spacing={2} width='90vw'>
        {products.map((product) => <Grid item xs={3}><Card product={product}/></Grid>)}  
        </Grid> 
        
        </Container>
    )
}