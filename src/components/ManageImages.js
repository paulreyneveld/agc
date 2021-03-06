import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { startLoadImages, deleteImage } from '../reducers/imageReducer'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const ManageImages = () => {
    const dispatch = useDispatch() 

    const [loading, setLoading] = useState(false)

    const images = useSelector(state => state.images)
    const user = useSelector(state => state.login.user)
    
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
        display: 'block'
        // float: 'left',
        // backgroundColor: 'light gray'
    }

    const removeImage = (id) => {
        dispatch(deleteImage(id, user.token))
    }
    
    return (
        <Container>
        <div>
            {loading ? (
                <div>Loading. . .</div>
            )
            : images.map( image => {
                return (
                    <>
                    <Image style={imageStyle} key={image._id} src={`http://localhost:3001/api/images/${image._id}`} />
                    <Button onClick={() => removeImage(image._id)}>Delete</Button>
                    </>
                    )
            })}
        </div>
        </Container>
    )
}

export default ManageImages