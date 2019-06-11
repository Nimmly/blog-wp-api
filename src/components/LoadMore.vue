<template>
    <div id="load">
        <button class="btn btn-warning text-center" @click="loadMore($event)">Load more ...</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name:'LoadMore',
        methods: mapActions(['loadMore']),


    }
</script>

<style>
    #load{
        text-align:center;
        margin-top:20px;
    }
</style>