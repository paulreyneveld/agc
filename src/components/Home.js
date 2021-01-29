import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <h1>Home</h1>
        <Row>
        <Col xs={1}>

        </Col>
        <Col xs={8}>
        <p>{lorem.data}</p>
        </Col>
        </Row>
        </Container>
        
    )
}

export default Home