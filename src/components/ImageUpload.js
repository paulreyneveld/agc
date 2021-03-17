import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { uploadImage } from '../reducers/imageReducer'
import { useDispatch } from 'react-redux'

const ImageUpload = () => {
    const [images, setImages] = useState([])
    const maxNumber = 10;    

    const dispatch = useDispatch()

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex)
        setImages(imageList)
    }



    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
    }

    const buttonStyle = {
        marginRight: "0.5em",
        marginBottom: "1em"
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
                style={isDragging ? { color: 'red' } : undefined}
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
                    <Button style={buttonStyle} style={{marginTop: "0.5em"}} button variant="outline-primary" onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button style={buttonStyle} style={{marginTop: "0.5em"}} variant="outline-primary" onClick={() => onImageRemove(index)}>Remove</Button>
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
        </Container>
        </>
    )
}


export default ImageUpload