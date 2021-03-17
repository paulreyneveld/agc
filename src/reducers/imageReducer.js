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



export default imageReducer

