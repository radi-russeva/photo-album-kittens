import axios from "axios";

const PICTURES_BASE_REST_API_URL = 'http://localhost:8080/api/v2/photos';

class PicturesService {

    geAllPictures() {
        return axios.get(PICTURES_BASE_REST_API_URL)
    }
    createPhoto(photo) {
        return axios.post(PICTURES_BASE_REST_API_URL, photo)
    }
    getPhotoById(photoId) {
        return axios.get(PICTURES_BASE_REST_API_URL+ '/' + photoId)
    }
    editPhotoInfo(photoId, photo) {
        return axios.put(PICTURES_BASE_REST_API_URL+ '/' + photoId, photo)
    }

    deletePhoto(photoId) {
        return axios.delete(PICTURES_BASE_REST_API_URL+ '/' + photoId)
    }
}

export default new PicturesService;