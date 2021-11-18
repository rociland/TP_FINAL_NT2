<template>
  <section class="src-components-comunes-notificar-ok">
  
      <div class="form-row">
        
        <div class="form-group col-md-3">
           <font-awesome-icon :icon="icono" class="icon-notificar"/>
        </div>

        <div class="form-group col-md-9">
          <h1 class="mensaje-notificar">{{mensaje}}</h1>
        </div>

      </div>



     <div class="form-row">
        <div class="form-group col-md-4">
        </div>
        <!-- -------------------------- Cancelar --------------------------  -->
        <div class="form-group col-md-4">
          <button class="btn btn-cancelar my-3" type="reset" id="cancelar" v-on:click="volver()">
            HOME
          </button>
        </div>
        <!-- -------------------------- Crear --------------------------  -->
        <div class="form-group col-md-4">
          <button class="btn btn-aceptar my-3" type="submit" id="crear" v-on:click="crear()">
            CREAR NUEVO
          </button>
        </div>
      </div>

  </section>

</template>

<script>

export default  {
    name: 'src-components-comunes-notificar-ok',
    props: ['mensaje', 'icono', 'modal'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      volver() {
        this.$router.push('home')
      },
      crear() {
          this.$bvModal.hide(this.modal) 
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">


.icon-notificar{
 color: rgb(211 181 209);
 font-size: 7em;
}

.mensaje-notificar {
    font-style: italic;
    color: rgb(118 86 116);
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
