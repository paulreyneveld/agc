import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ImageGallery from 'react-image-gallery'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadImages } from '../reducers/imageReducer'
import { BASE_API_URL } from '../utils/constants'

const Gallery = () => {

    const dispatch = useDispatch()
    
    const images = useSelector(state => state.images)

    const restructuredImages = images.map(image => { 
        return {
            original: `${BASE_API_URL}/images/${image._id}`
        }
    })

    useEffect(() => {
        dispatch(startLoadImages());
    }, [dispatch])

    useEffect(() => {
        if (images.length > 0) {
        }
    }, [images])

    return (
        <Container>
            <ImageGallery 
                items={restructuredImages} 
                showFullscreenButton={false}
                showPlayButton={false}
            />
        </Container>
    )
}

export default Gallery