import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

const Gallery = () => {

    const [dummyImages, setDummyImages] = useState([])

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?page=1&limit=30/200/300')
            .then(response => setDummyImages(response.data))
    }, [])
    console.log(dummyImages)

    return (
        <>
        <Container>
        <h3>Anyone here, hello</h3>
        <p>Somebody, anybody?</p>
        </Container>
        </>
    )
}

export default Gallery