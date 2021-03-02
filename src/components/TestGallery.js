import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_API_URL } from '../utils/constants'
import Container from 'react-bootstrap/esm/Container'
import Photo from './Photo'

const TestGallery = () => {

    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_API_URL}/photos`)
            .then(response => {
                console.log(response)
                setPhotos(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    console.log(photos)
    return (
        <Container>
            <p>cheese</p>
            {photos.map((photo) => <Photo key={photo._id} id={photo._id} />)}
        </Container>
    )
}

export default TestGallery