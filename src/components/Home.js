import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'

const Home = () => {

    const [lorem, setLorem] = useState('')

    const obtainLorem = () => {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text')
            .then(response => setLorem(response))
            .catch(error => console.log(error))
    }

    useEffect(() => obtainLorem(), [])
        
    return (
        <Container>
        <h1>Home</h1>
        <p>{lorem.data}</p>
        </Container>
        
    )
}

export default Home