import axios from 'axios'
const KEY = 'AIzaSyCeh2K4kUBzHYWBGGSUVr44IhR00smG3y4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

