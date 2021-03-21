import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const NewFooter  = () => {

    const style = {
        backgroundColor: '#FFEA8E',
        height: '4em'
    }
    
    return (
        <footer>
        <div style={style}>
            <Container>
            Copyright Alien Girl Cult 2021 <br />
            </Container>
        </div>
        </footer>
    )
}

export default NewFooter