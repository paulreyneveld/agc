import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { uploadImages } from '../reducers/imageReducer'

const FileUpload = () => {

    const [files, setFiles] = useState([])
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null)

    const dispatch = useDispatch() 

    const handleFileChange = (event) => {
        event.preventDefault()
        // const reader = new FileReader()
        // const file = event.target.files[0]
        // reader.onloadend = () => {
        //     // setFile() what setFile()?
        //     setFiles(file)
        //     setImagePreviewUrl(reader.result)
        // }
        // reader.readAsDataURL(file)
        // Append the individual images to the local state
        // Then use dispatch to send the images to the reducer
        // Finally, send that whole array from the reducer to the backend
        console.log(event.target.files)
        setFiles(event.target.files)
    }

    console.log(files)
    console.log(typeof files)
    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
        dispatch(uploadImages(files))
    }

    const displayPreviews = () => {
        if (imagePreviewUrl) {
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