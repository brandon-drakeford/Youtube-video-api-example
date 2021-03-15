import axios from 'axios'

const KEY = 'AIzaSyCTW2l3t_Q20Fjr4xMcqmOV4Q0v9XVUB6g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})