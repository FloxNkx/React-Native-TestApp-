export const FETCH_IMAGES_PENDING = 'FETCH_IMAGES_PENDING';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';

export const fetchingImagesPending = () => {
  return {
    type: FETCH_IMAGES_PENDING,
    pending: true,
  };
};

export const fetchingImagesSucces = (json) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    pending: false,
    payload: json,
  };
};

export const fetchingImagesError = (error) => {
  return {
    type: FETCH_IMAGES_ERROR,
    pending: false,
    payload: error,
  };
};

export const fetchImages = () => async (dispatch) => {
  dispatch(fetchingImagesPending());

  try {
    const response = await fetch(
      'https://api.unsplash.com/photos/?client_id=EnYbjrl13rkMZPaxyizTOk8V03-oORvCCTo18UeXSa4',
    );
    const json = await response.json();
    dispatch(fetchingImagesSucces(json));
  } catch (error) {
    dispatch(fetchingImagesError(error));
  }
};
