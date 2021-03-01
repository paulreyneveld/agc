import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_API_URL } from '../utils/constants'
import Container from 'react-bootstrap/esm/Container'
import Photo from './Photo'

const TestGallery = () => {

    useEffect(() => {
        axios.get(`${BASE_API_URL}/photos`)
            .then(response => console.log(response))
    }, [])


    return (
        <Container>
            <p>cheese</p>
        </Container>
    )
}

export default TestGallery