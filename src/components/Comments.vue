<template>
    <div class="container">
        <div  v-for="comment in comments">
            <h1>Comment for post number  {{ comment.postId }}:</h1>
            <ul>
                <h1>{{ comment.name }}</h1>
                <li>{{ comment.body }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Comments',
        computed: mapGetters(['comments']),
        methods: mapActions(['fetchComments']),
        created(){
            this.fetchComments();
        }

    }
</script>

<style scoped>
    li{
        border-radius: 10px;
        padding: 10px;
        border-bottom: 1px dotted #ccc;
    }
</style>