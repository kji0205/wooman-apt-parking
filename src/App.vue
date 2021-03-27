<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header></Header>
    <section class="container">
      <router-view/>
    </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Header from "@/components/Header";

export default {
  name: 'App',
  components: {Header},
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

:root {
  --text-color: #f0f4f5;
  --background-color: #263343;
  --accent-color: #d49466;
}

body {
  margin: 0;
  font-family: 'Source Code Pro';
  width: 100vw;
  height: 100vh;
  background-color: #42b983;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.container{
  position: absolute;

  background-color: #d49466;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
