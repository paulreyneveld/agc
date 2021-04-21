import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { uploadImages } from '../reducers/imageReducer'
import { useDispatch } from 'react-redux'

const ImageUpload = () => {
    const [images, setImages] = useState([])
    const [notification, setNotification] = useState(false)

    const maxNumber = 10;    

    const dispatch = useDispatch()

    const onChange = (imageList) => {
        setImages(imageList)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        dispatch(uploadImages(images))
        setNotification(true)
        setTimeout(() => {
            setNotification(false)
            // props.history.push('/')
        }, 
        2000)
    }

    const confirmation = () => {
        if (notification) {
            return (
                <p>Updating. . .</p>
            )
        }
    }

    const buttonStyle = {
        marginRight: "0.5em",
        marginBottom: "1em", 
        marginTop: "0.5em"
    }

    return (
        <>
        <Container>
        <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
        >
        <ImageUploading
            multiple
            type="file"
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            }) => (
            <div className="upload__image-wrapper">
                <Button
                variant="outline-primary"
                // style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                style={buttonStyle}
                >
                Click or Drop here
                </Button>
                &nbsp;
                <Button style={buttonStyle} variant="outline-primary" onClick={onImageRemoveAll}>Remove all images</Button>
                {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                    <Button style={buttonStyle} button variant="outline-primary" onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button style={buttonStyle} button variant="outline-primary" onClick={() => onImageRemove(index)}>Remove</Button>
                    </div>
                </div>
                ))}
            </div>
            )}
        </ImageUploading>
        <Button
          style={buttonStyle}
          variant="outline-primary"
          type="submit"
        >
          Upload
        </Button>
        </Form>
        {confirmation()}
        </Container>
        </>
    )
}


export default ImageUpload