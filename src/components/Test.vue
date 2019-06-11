<template>
    <div>
        <section class="sec1">
            <div>
                <input class="search" type="text" placeholder="search" v-model="search">
            </div>
            <div class="container">
                <upload-form></upload-form>
                <h1 class="text-center">P O S T S :</h1>
                <ul class="row">
                    <li class="col-md-4" v-for="post in filteredPosts">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text">{{ post.body }}</p>
                            <router-link to="/comments" @click="fetchComments(post.id)" class="button btn-warning">Comments</router-link>
                            <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
                        </div>
                    </li>
                </ul>
                <load-more></load-more>
            </div>
        </section>
    </div>


</template>

<script>
import UploadForm from './UploadForm';
import LoadMore from './LoadMore';

    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "Test",
        data(){
            return{
                search:''
            }
        },
        components:{
            UploadForm,
            LoadMore
        },
        computed: {
            ...mapGetters(['posts']),
            filteredPosts(){
                return this.posts.filter((post) => {
                    return post.title.match(this.search);
                })
            }
        },
        methods: {
            ...mapActions(['fetchPosts', 'deletePost', 'fetchComments'])
        },
        created() {
            this.fetchPosts();
        },


    }
</script>

<style scoped>
    .button{
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .card-body{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .search{
        margin-top:10px;
    }

</style>

