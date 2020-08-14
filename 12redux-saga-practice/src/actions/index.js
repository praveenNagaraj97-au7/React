import { IMAGES } from "../constants";

const { LOAD, LOAD_SUCCESS, LOAD_FAILURE } = IMAGES;

const loadImages = () => ({
  type: LOAD,
});

const setImages = (images) => ({
  type: LOAD_SUCCESS,
  images,
});

const setError = (error) => ({
  type: LOAD_FAILURE,
  error,
});

export { loadImages, setError, setImages };
