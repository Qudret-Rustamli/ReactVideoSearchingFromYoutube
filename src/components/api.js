import axios from 'axios';
const YOUTUBE_API_KEY = 'AIzaSyDMr5tZEVxMLMtikrYwreCKNkm0VHzud64';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: YOUTUBE_API_KEY,
  },
});
