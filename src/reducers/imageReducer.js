import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_IMAGES':
      return action.images
    case 'DELETE_IMAGE':
      return state.filter(item => item._id !== action.id)
    default:
      return state
  }
}

export const uploadImages = (images) => {
  return async (dispatch) => {
    console.log(images)
    const formData = new FormData()
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i].file)
    }
    console.log(formData)
    await axios.post(`${BASE_API_URL}/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export const startLoadImages = () => {
  return async (dispatch) => {
    try {
      const images = await axios.get(`${BASE_API_URL}/images`);
      dispatch(loadImages(images.data));
    } catch (error) {
      console.log(error)
    }
  }
}
  
export const loadImages = (images) => ({
  type: 'LOAD_IMAGES',
  images
})

export const deleteImage = (id, newToken) => {
  const token = `bearer ${newToken}`
  const config = {
      headers: { Authorization: token },
  }
  return async (dispatch) => {
    try {
      await axios.delete(`${BASE_API_URL}/images/${id}`, config)
      dispatch({
        type: 'DELETE_IMAGE',
        id
      })
    }
    catch (error) {
      console.log(error)
    }
  }
}

export default imageReducer

