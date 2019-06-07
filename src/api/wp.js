
import axios from 'axios';


const ROOT_URL = 'https://wptavern.com/wp-json/wp/v2/posts/';

export default {

    fetchPosts(){
        return axios.get(`${ROOT_URL}`)
    },
}