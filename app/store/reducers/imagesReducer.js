import {
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_PENDING,
} from '../actions/imagesAction';

const initialState = {
  pending: false,
  images: [],
  errorMsg: '',
};

export const fetchImagesReduce = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case FETCH_IMAGES_SUCCESS: {
      return {
        ...state,
        pending: false,
        images: action.payload,
      };
    }
    case FETCH_IMAGES_ERROR: {
      return {
        ...state,
        pending: false,
        errorMsg: action.payload,
        images: [],
      };
    }
    default: {
      return state;
    }
  }
};
