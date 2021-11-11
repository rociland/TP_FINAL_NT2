<template>

  <section class="scr-componentes-navbar">
    <Login></Login>

  </section>

</template>

<script>
    
    // import Login from './Login/index.vue'
    import Login from './pruebas.vue'


    export default  {
    name: 'scr-componentes-navbar',
    props: [],
    components: {
        Login
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .scr-componentes-navbar {

  }
</style>
