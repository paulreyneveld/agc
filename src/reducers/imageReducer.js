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
    console.log(images[0])
    const formData = new FormData()
    formData.append('images', images[0])
    console.log(formData)
    // images.forEach(image => {
    //   console.log(image)
    //   formData.append('images', image.file)
    // })
    // console.log(formData)
    await axios.post(`${BASE_API_URL}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default imageReducer

