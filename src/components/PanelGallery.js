import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Gallery from 'react-gallery-designer'
import { startLoadImages } from '../reducers/imageReducer'

const PanelGallery = () => {

    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(startLoadImages());
    }, [dispatch]);

    const images = useSelector(state => state.images)

    console.log(images)

    // const displayImages = () => {
    //     if (images.length > 0) {
    //         return <Gallery images={images} />
    //     }
    // }

    return (
        <Container>
            <h2>Hello</h2>
            <Gallery images={images} />
        </Container>
    )
}

export default PanelGallery