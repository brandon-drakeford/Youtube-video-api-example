import axios from 'axios'

const KEY = 'AIzaSyCRr3skSMChq66ds_CF9klv0zgTaivpH1s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})