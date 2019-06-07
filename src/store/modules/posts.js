import api from '../../api/wp';

const state = {
    posts:[]
};
const getters = {
    posts: state => state.posts,
}
const actions = {
    async fetchPosts({commit}) {
        const response = await api.fetchPosts();
        commit('setPosts', response.data)
    }

};
const mutations = {
    setPosts: (state,posts) => {
        state.posts = posts
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}