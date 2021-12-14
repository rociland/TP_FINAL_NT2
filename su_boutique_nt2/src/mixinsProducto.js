import Vue from 'vue'

export const miMixGlobalProducto = {
    beforeMount() {
      },
      mounted() {
      },
      methods : {
        buscarProductos() {
          this.$store.dispatch('pedirProductosAlServidor')
        },
        crearProducto(body) {
            this.$store.dispatch('crearProducto', body)
        },
        modificarProducto(body) {
            this.$store.dispatch('guardarProducto', body)
        },
        borrarProducto(id) {
          this.$store.dispatch('borrarProducto', id)
        }  
      },
      computed : {
        mostrarProductos() {
          let result = this.$store.state.result
          return result
        },
        mensajeModificar() {
          let result = this.$store.state.msj
          return result
        },
      }
}

Vue.mixin(miMixGlobalProducto)
