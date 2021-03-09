import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const photosReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PHOTOS':
      return action.photos;
    default:
      return state;
  }
};
  
export const beginAddPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('photo', photo);
      await axios.post(`${BASE_API_URL}/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console.log(error)
    }
  };
};
  
export const startLoadPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await axios.get(`${BASE_API_URL}/photos`);
      dispatch(loadPhotos(photos.data));
    } catch (error) {
      console.log(error)
    }
  };
};
  
export const loadPhotos = (photos) => ({
  type: 'LOAD_PHOTOS',
  photos
});

export default photosReducer;


