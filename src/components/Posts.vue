<template>
    <div>
        <table class="table is-bordered">
            <thead>
            <tr>
                <th>Title</th>
                <th>Posted at</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts">
                <td>{{post.title.rendered}}</td>
                <td>{{post.date_gmt}}</td>
            </tr>
            </tbody>
        </table>
        <pagination :pagination="pagination"
                    @prev="--postsData.page; getPosts();"
                    @next="postsData.page++; getPosts();">
        </pagination>
    </div>

</template>

<script>
    import axios from 'axios';
    import pagination from './pagination.vue'
    export default {
        mounted() {
            this.getPosts();
        },
        components: {
            'pagination': pagination
        },
        data() {
            return {
                postsUrl: 'https://wptavern.com/wp-json/wp/v2/posts/',
                posts: [],
                postsData: {
                    per_page: 50,
                    page: 1
                },
                pagination: {
                    prevPage: '',
                    nextPage: '',
                    totalPages: '',
                    from: '',
                    to: '',
                    total: '',
                },
            }
        },
        methods: {
            getPosts() {
                axios.get(this.postsUrl, {params: this.postsData})
                    .then((response) => {
                        this.posts = response.data;
                        this.configPagination(response.headers);
                    })
                    .catch( (error) => {
                        console.log(error);
                    });
            },
            configPagination(headers) {
                this.pagination.total = +headers['x-wp-total'];
                this.pagination.totalPages = +headers['x-wp-totalpages'];
                this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
                this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
                this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
                this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';
            }
        }
    }
</script>