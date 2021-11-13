<template>

  <section class="src-components-comunes-header-titulo">
    <div class="text-center row">

      <div class="col-md-3 ">
          <img class="icon-header" alt="Vue logo" :src="image">
      </div>

      <div class="col-md-6">
        <h2 class="text_home">{{ titulo }}</h2>
      </div>

    </div>

  </section>

</template>

<script>
import image from '../../assets/logo.png'

  export default  {
    name: 'src-components-comunes-header-titulo',
    props: ['titulo'],
    mounted () {

    },
    data () {
      return {
      image   : image,
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-comunes-header-titulo {
    background-color: #f0e2ef;
    border-bottom: 2px solid #826a80;
  }
  .text_home {
        color: rgb(116, 90, 114);
        font-style: italic;
    }

    hr {
        color: rgb(107, 97, 106);
    }
    .icon-header{
      width: 40px;
    }
</style>
