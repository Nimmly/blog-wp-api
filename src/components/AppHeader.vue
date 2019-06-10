<template>
    <div>
        <nav class="navbar navbar-light" style="background-color: ghostwhite;">

            <div>
                <input @input="search" type="search">
            </div>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link " to="/add">Add Post</router-link>
            <a>Log In</a>
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'Header',
        methods:{

            search(event){
                this.$store.dispatch('searchTerm',{
                    term:  event.target.value
                })

            }
        }
    }


</script>
<style>

</style>