<template>
  
  <Navbar />
  <!-- <router-view></router-view> -->
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
      Navbar
    }
  } 

</script>

<style>
    #app {
      text-align: center;
      background-color: #F1E4F0 ;
      min-height: 100vh; /* Para que el background abarque toda la pantalla */ 
    }
    #boton {
      background: rgb(116, 90, 114);
      border-color:rgb(116, 90, 114);
      width: 75%;
    }
</style>
