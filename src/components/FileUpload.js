import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { uploadImages } from '../reducers/imageReducer'

const FileUpload = () => {

    const [files, setFiles] = useState([])
    const [imagePreviewUrl, setImagePreviewUrl] = useState([])

    const dispatch = useDispatch() 

    const handleFileChange = (event) => {
        event.preventDefault()
        setFiles(event.target.files)
        // for (let i = 0; i < files.length; i++) {
        //     const reader = new FileReader()
        //     const file = event.target.files[i]
        //     reader.onloadend = () => {
        //         setImagePreviewUrl(reader.result)
        //         // setImagePreviewUrl(imagePreviewUrl.concat(reader.result))
        //         // console.log(imagePreviewUrl)
        //     }
        //     reader.readAsDataURL(file)
        // }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
        dispatch(uploadImages(files))
    }

    const displayPreviews = () => {
        if (imagePreviewUrl.length > 0) {
            return <Image src={imagePreviewUrl} thumbnail={true} />
        }
        else {
            return <p>Please select an image to preview</p>
        }
    }

    return (
        <Container>
            <Form
                onSubmit={handleFormSubmit}
                method="post"
                encType="multipart/form-data"
                className="upload-form"
            >
                <Form.Group>
                    <Form.File 
                        multiple 
                        id="form-file-control" 
                        label="File input" 
                        onChange={handleFileChange} 
                    />
                </Form.Group>
                <Button 
                    variant="outline-primary"
                    type="submit"
                >
                Submit
                </Button>
            </Form>
            {displayPreviews()}
        </Container>
    )
}

export default FileUpload