import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';
const NUM = 10;

export default {

    fetchPosts(){
        return axios.get(`${ ROOT_URL }?_limit=${NUM}`);
    },
    addPost(title,body){
        return axios.post(`${ROOT_URL}`, { title,body } );
    },
    deletePost(id){
        return axios.delete(`${ROOT_URL}/${id}`);
    },
    fetchComments(id){
        return axios.get(`${ROOT_URL}/${id}/comments`);
    },
    loadMore(num){
        return axios.get(`${ROOT_URL}?_limit=${NUM+num}`);
    }
}