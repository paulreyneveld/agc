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

    const style = {
        height: 300,
        width: 300
    }

    return (
        <Container>
            <h2>Hello</h2>
            {images.map( image => {
                return <Image style={style} src={`http://localhost:3001/api/images/${image._id}`} />
            })}
            
        </Container>
    )
}

export default PanelGallery