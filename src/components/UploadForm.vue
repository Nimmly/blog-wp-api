<template>
    <div>
        <form  @submit="uploadPost" class="form-horizontal">
            <div class="form-group">
                <label for="title" class="control-label col-xs-4">Title</label>
                <div class="col-xs-8">
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-address-card"></i>
                        </div>
                        <input v-model="newPost.title" id="title" name="title" type="text" class="form-control" required minlength="2">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-xs-offset-4 col-xs-8">
                    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="col-xs-offset-4 col-xs-8">
                    <button name="reset" type="reset" class="btn btn-danger" >Reset</button>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'UploadForm',
        computed: mapGetters(['newPost']),
        methods:mapActions(['uploadPost'])
    }
</script>

<style>
    body:after{
        background:white;
    }
</style>