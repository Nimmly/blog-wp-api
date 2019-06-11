import api from '../../api/jsonplacehollder';
import axios from 'axios';
/*
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

}*/

const state = {
    posts: [],
    comments: [],
    newPost:[]
};

const getters = {
    posts: state => state.posts,
    comments: state => state.comments,
    newPost: state => state.newPost
};


const actions = {
    async fetchPosts({ commit }){
        const response = await api.fetchPosts();
        commit('setPosts', response.data )
    },
    async addNewPost({ commit }, newPost ){
        const {title, body} = newPost;
        const response = await api.addPost(title, body);
        commit('setPost', response.data);
        console.log(response.data)
    },
    async deletePost({ commit }, id){
        await api.deletePost(id);
        commit("removePost", id);
    },
    async fetchComments({ commit }, id){
        const response = await api.fetchComments(id);
        commit('setComments', response.data);
    },
    async loadMore({ commit }){
        const num = 10;
        const response = await api.loadMore(num);
        commit('setPosts', response.data);
    }
};

const mutations = {
    setPosts:(state,posts) => {
        state.posts = posts;
    },
    setPost:(state,title,body) => {
        state.posts.unshift({title,body})
    },
    removePost:(state, id) => {
        state.posts = state.posts.filter(post => post.id !== id);
    },
    setComments:(state,comments) => {
        state.comments = comments;
    }

};

export default {
    state,
    getters,
    actions,
    mutations
}

