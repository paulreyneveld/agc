import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { startLoadImages } from '../reducers/imageReducer'
import Image from 'react-bootstrap/Image'

const PanelGallery = () => {

    const dispatch = useDispatch() 

    const [loading, setLoading] = useState(false)

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

    return (
        <Container>
        <div style={divStyle}>
            {loading ? (
                <div>Loading. . .</div>
            )
            : images.map( image => {
                return (
                    <>
                    <Image style={imageStyle} key={image._id} src={`http://localhost:3001/api/images/${image._id}`} />
                    </>
                    )
            })}
        </div>
        </Container>
    )
}

export default PanelGallery