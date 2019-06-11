<template>
    <div>
        <ul class="nav nav-pills nav-fill" style="background-color: ghostwhite;">
            <li class="nav-item">
                <router-link id="home" class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                LogIn
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Header',
    }


</script>
<style>
   #home{
       background: #ffc107;
       color:white;
   }
</style>