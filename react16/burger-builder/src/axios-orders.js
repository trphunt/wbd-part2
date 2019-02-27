import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-demo-project-6e121.firebaseio.com/'
});

export default instance;