import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_IMAGES':
      return action.images
    default:
      return state
  }
}

export const uploadImages = (images) => {
  return async (dispatch) => {
    const formData = new FormData()
    images.forEach((image, index) => {
      console.log(image.file)
      formData.append(`images`, image.file)
    })
    console.log(formData)
    await axios.post(`${BASE_API_URL}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default imageReducer

