import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ImageGallery from 'react-image-gallery'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadPhotos } from '../reducers/photosReducer'
import { BASE_API_URL } from '../utils/constants'

const Gallery = () => {

    const dispatch = useDispatch()
    
    const photos = useSelector(state => state.photos)

    const restructuredImages = photos.map(photo => { 
        return {
            original: `${BASE_API_URL}/photos/${photo._id}`
        }
    })

    useEffect(() => {
        dispatch(startLoadPhotos());
    }, [dispatch])

    useEffect(() => {
        if (photos.length > 0) {
        }
    }, [photos])

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