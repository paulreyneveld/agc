import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { startLoadImages } from '../reducers/imageReducer'
import Image from 'react-bootstrap/Image'

const PanelGallery = () => {

    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(startLoadImages());
    }, [dispatch]);

    const images = useSelector(state => state.images)

    const imageStyle = {
        height: 250,
        width: 250,
        objectFit: 'cover',
        marginRight: '1em',
        marginBottom: '1em',
        float: 'left'
    }

    return (
        <Container>
        <div>
            {images.map( image => {
                return <Image style={imageStyle} src={`http://localhost:3001/api/images/${image._id}`} />
            })}
        </div>
        </Container>
    )
}

export default PanelGallery