<template>
    <div>
        <ul v-for="post in posts">
            <li>{{ post.title.rendered }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "Test",
        computed: mapGetters(['posts']),
        methods: mapActions(['fetchPosts']),
        created() {
            this.fetchPosts();
        }

    }
</script>