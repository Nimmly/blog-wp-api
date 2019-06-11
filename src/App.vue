<template>
  <div id="app">
    <div class="slantedDivA">
      <Header></Header>
      <router-view></router-view>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import Header from './components/AppHeader';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
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
</style>
