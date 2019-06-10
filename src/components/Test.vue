<template>
    <div>
        <section class="slantedDivA">
            <div class="container">
                <ul class="row">
                    <li class="col-sm" v-for="post in posts">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title.rendered }}</h5>
                            <p class="card-text">{{ post.excerpt.rendered }}</p>
                            <a href="#" class="btn btn-primary">CLick</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="sec2">
            Footer text
        </section>

        <section class="section">

        </section>
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

<style >

 .slantedDivA{
     position: relative;
     width: 100%;
     height: auto;
     background: whitesmoke;
     box-sizing: border-box;
     padding: 30px;
     color: black;
     margin-bottom: 200px;
 }

 .slantedDivA:after{
     position: absolute;
     width: 100%;
     height: 100%;
     content: '';
     background: inherit;
     z-index: -1;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     transform-origin: top right;
     transform: skewY(-4deg);
 }
    body{
        background: black;
        color: white;
    }
    li{
        list-style-type: none;
    }
    .card-body{
        padding: 20px;
        box-shadow: gray;
    }


</style>

