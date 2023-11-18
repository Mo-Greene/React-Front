import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/';

export const getBoards = () => {
    return axios.get(BASE_API_URL + "boards");
}