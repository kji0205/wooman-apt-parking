<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Header></Header>
    <main class="container">
      <router-view/>
    </main>
    <footer>
<!--      <Declaration></Declaration>-->
    </footer>
  </div>
</template>

<script>
import './assets/reset.css';
import Header from "@/components/Header";
// import Declaration from "@/components/declaration"

export default {
  name: 'App',
  components: {Header},
  created() {

  }
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
  --text-color: #000000;
  --text-hover: #448aff;
  --background-color: #F5F5F6;
  --accent-color: #006db3;
  --item-background-color: #E1E2E1;
}

body {
  margin: 0;
  font-family: 'Source Code Pro';
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  padding-top: 50px;
  overscroll-behavior-y: none;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.container {
  /*background-color: #d49466;*/

}

footer {
  position: fixed;
  bottom: 0;
}
</style>
