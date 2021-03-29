import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/esm/Container'
import Photo from './Photo'
import { startLoadImages } from '../reducers/imageReducer'


const TestGallery = () => {

    const dispatch = useDispatch()
    
    const [isLoading, setIsLoading] = useState(false);

    const images = useSelector(state => state.images)

    useEffect(() => {
        setIsLoading(true);
        dispatch(startLoadImages());
    }, [dispatch]);

    console.log(images)
    useEffect(() => {
        if (images.length > 0) {
        setIsLoading(false);
        }
    }, [images]);

    return (
        <Container>
            <div className="images-list">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                images.map((image) => <Photo key={image._id} id={image._id} />)
            )}
            </div>
        </Container>
    )
}

export default TestGallery