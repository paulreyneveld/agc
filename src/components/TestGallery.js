import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/esm/Container'
import Photo from './Photo'
import { startLoadPhotos } from '../reducers/photosReducer'

const TestGallery = () => {

    const dispatch = useDispatch()
    
    const [isLoading, setIsLoading] = useState(false);

    const photos = useSelector(state => state.photos)
    const errors = useSelector(state => state.errors)

    useEffect(() => {
        setIsLoading(true);
        dispatch(startLoadPhotos());
    }, [dispatch]);

    useEffect(() => {
        if (photos.length > 0) {
        setIsLoading(false);
        }
    }, [photos]);

    return (
        <Container>
            <div className="photos-list">
            {errors && errors.get_error && (
                <p className="errorMsg centered-message">{errors.get_error}</p>
            )}
            {isLoading ? (
                <div className="loading-msg centered-message">Loading...</div>
            ) : (
                photos.map((photo) => <Photo key={photo._id} id={photo._id} />)
            )}
            </div>
        </Container>
    )
}

export default TestGallery