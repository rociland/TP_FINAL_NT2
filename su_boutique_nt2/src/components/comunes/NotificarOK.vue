<template>
  <section class="src-components-comunes-notificar-ok">
    
    <h1>{{mensaje}}</h1>

     <div class="form-row">
        <div class="form-group col-md-4">
        </div>
        <!-- -------------------------- Cancelar --------------------------  -->
        <div class="form-group col-md-4">
          <button class="btn btn-cancelar my-3" type="reset" id="cancelar">
            HOME
          </button>
        </div>
        <!-- -------------------------- Crear --------------------------  -->
        <div class="form-group col-md-4">
          <button class="btn btn-aceptar my-3" type="submit" id="crear">
            CREAR NUEVO
          </button>
        </div>
      </div>

  </section>

</template>

<script>

export default  {
    name: 'src-components-comunes-notificar-ok',
    props: ['mensaje'],
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

.src-components-comunes-notificar-ok{
  /* background-image: url(user-cC\heck); */
}
.btn-aceptar {
  background: rgb(116, 90, 114);
  border-color:rgb(116, 90, 114);
  width: 100%;
  color: #d9cdd8;
}

.btn-cancelar {
  background: rgb(238, 220, 237);
  border-color: rgb(116, 90, 114);
  width:100%;
  color: rgb(116, 90, 114);
}
  
</style>
