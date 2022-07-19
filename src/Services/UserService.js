import axios from "axios";

const USERS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/users';

class UserService {

    getAllUsers() {
        return axios.get(USERS_BASE_REST_API_URL)
    }
    createUser(user) {
        return axios.post(USERS_BASE_REST_API_URL, user)
    }
    editUser(userId, user) {
        return axios.put(USERS_BASE_REST_API_URL+ '/' + userId, user)
    }
    getUser(userId, user) {
        return axios.get(USERS_BASE_REST_API_URL+ '/' + userId, user)
    }
}

export default new UserService;