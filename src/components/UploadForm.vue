<template>
    <div class="card">
        <h1 class="card-body">Create a new Post</h1>
        <form  @submit="addAll" class="form-horizontal">
            <div class="form-group">
                <div class="card-body col-xs-8">
                    <label>Title:</label>
                    <div class="input-group">
                        <input v-model="title" id="title" name="title" type="text" class="form-control" >
                    </div>
                    <label>Description:</label>
                    <div class="input-group">
                        <input v-model="body" id="body" name="body" type="text" class="form-control" >
                    </div>
                </div>
                <div class="card-body col-xs-offset-4 col-xs-8">
                    <button name="submit" type="submit" class="btn btn-warning">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'UploadForm',
        data() {
            return {
                    title: '',
                    body: ''
                }
            },
        methods:{
            ...mapActions(['addNewPost']),
            onSubmit(e){
                e.preventDefault();
                this.addNewPost(this.title);

            },
            addAll(e){
                e.preventDefault();
                const newPost = {
                    title: this.title,
                    body: this.body
                }
                this.addNewPost(newPost);
            }
        }


    }
</script>

<style>
   .card{
       margin-bottom: 20px;
   }
    ul.row{
        margin-left: -54px
    }
</style>