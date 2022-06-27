import styled from 'styled-components'

export const Container = styled.div`
    width: 20vw;
    height: 30vh;
    max-width: 300px;
    max-height: 400px;
    border: 1.5px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img{
        width: 100px;
        height: 150px;
    }

    h3{
        font-size: 1rem;
        text-align: center;
    }

    p{
        font-size: 0.8rem;
        color: grey;    
        align-content: left;
    }

`