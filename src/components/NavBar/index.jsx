import { useHistory } from 'react-router-dom'
import {Container} from './style'

export const NavBar = () => {

    const history = useHistory('')
    console.log(history)

    return (
        <Container>
            <h2>Kenzie Shop</h2>
            {history.location.pathname === '/cart' ? (
                <button onClick={() => history.push('/')}>Voltar</button>
            ) : (
                    <button onClick={() => history.push('/cart')}>Carrinho</button>
            )}
        </Container>
    )
}