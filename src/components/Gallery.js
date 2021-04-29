import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { startLoadImages } from '../reducers/imageReducer'
import Image from 'react-bootstrap/Image'
import ImageGallery from 'react-image-gallery'
import { BASE_API_URL } from '../utils/constants'
import Button from 'react-bootstrap/Button'

const Gallery = () => {

    const dispatch = useDispatch() 

    const [loading, setLoading] = useState(false)
    const [imageId, setImageId] = useState(null)
    const [view, setView] = useState(false)

    const images = useSelector(state => state.images)
    
    useEffect(() => {
        setLoading(true)
        dispatch(startLoadImages());
    }, [dispatch]);

    useEffect(() => {
        if (images.length > 0 && images.length) {
            setLoading(false)
        }
    }, [images])

    const imageStyle = {
        height: 250,
        width: 250,
        objectFit: 'contain',
        marginRight: '1em',
        marginBottom: '1em',
        float: 'left',
        backgroundColor: 'light gray'
    }

    const divStyle = {
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    const restructuredImages = images.map(image => { 
        return {
            original: `${BASE_API_URL}/images/${image._id}`,
            id: image._id
        }
    })

    const modalDisplay = () => {
        // Find the index via the ID
        let index = 0
        if (view) {
            for (let i = 0; i < restructuredImages.length; i++) {
                if (restructuredImages[i].id === imageId) {
                    index = i
                    break
                }
            }
            console.log(index)
            return (
                <>
                <Button 
                    onClick={() => {
                            setView(false)
                            setImageId(null)
                        }
                    }
                >Return to Gallery
                </Button>
                <ImageGallery 
                    items={restructuredImages} 
                    startIndex={index}
                />
                </>
            )
        }
        return (
            <Container>
            <div style={divStyle}>
                {loading ? (
                    <div>Loading. . .</div>
                )
                : images.map( image => {
                    return (
                        <span key={image._id}>
                        <Image onClick={() => {
                            setView(true)
                            setImageId(image._id)
                            } 
                        }
                        style={imageStyle} 
                        key={image._id} 
                        src={`http://localhost:3001/api/images/${image._id}`} />
                        </span>
                        )
                })}
            </div>
            </Container>
        )
    }

    return (
        <Container>
        {modalDisplay()}
        </Container>
    )
}

export default Gallery