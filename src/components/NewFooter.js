import React from 'react'
import Container from 'react-bootstrap/Container'

const NewFooter  = () => {

    const style = {
        backgroundColor: '#FFEA8E',
        height: '4em',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        paddingTop: '1em'
    }
    
    return (
        <footer>
        <div style={style}>
            <Container>
            Copyright Alien Gvrl Cvlt 2021 <br />
            </Container>
        </div>
        </footer>
    )
}

export default NewFooter