import api from '../../api/wp';
import { router } from '../../main';

const state = {
    posts:[],
    newPost:[],
    term:null
};
const getters = {
    posts: state => state.posts,
    newPost: state => state.newPost,
    getTerm: state => state.term
}
const actions = {
    async fetchPosts({commit}) {
        const response = await api.fetchPosts();
        commit('setPosts', response.data)
    },
     async uploadPost({ commit }, newPost){
        await api.uploadPost(newPost);
        commit('addPosts',newPost)
         router.push("/");
    },
    async searchTerm({commit},term) {
        const response = await api.searchTerm(term.term)
        commit('setPosts', response.data);
    }

};
const mutations = {
    setPosts: (state,posts) => {
        state.posts = posts
    },
    addPosts:(state, newPost) => {
        state.posts.push(newPost)
    },
    setTerm:(state, term) => {
        state.term = term

    }

}

export default {
    state,
    getters,
    actions,
    mutations
}

