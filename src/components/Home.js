import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'

const Home = () => {

    const [lorem, setLorem] = useState('')

    const obtainLorem = () => {
        axios.get('https://baconipsum.com/api/?type=all-meat&paras=20&start-with-lorem=1')
            .then(response => setLorem(response))
            .catch(error => console.log(error))
    }

    useEffect(() => obtainLorem(), [])


    console.log(lorem.data)
    
    return (
        <Container>
        <p>{lorem.data}</p>
        </Container>
    )
}

export default Home