<template>
  <Router />
</template>

<script>

import Router from './components/Router.vue'

export default {
    name: 'App',
    components: {
      Router
    }
  } 

</script>

<style>
    #login {
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
