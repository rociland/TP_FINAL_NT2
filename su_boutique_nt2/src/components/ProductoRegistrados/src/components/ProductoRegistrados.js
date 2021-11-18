import { ProductoServer } from '../../../../funciones/producto'

import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import ProductoModificar from '../../../ProductoModificar/index.vue'


export default {
  name: 'src-components-productos-registrados',
  components: {
    HeaderTitle,
    ProductoModificar
  },
  props: [],
  mixins: [ProductoServer],
  data () {
    return {
      titulo      : 'Catalogo de productos / Lista de productos',
      peticion    : false,
      productos   : [],
      formstate   : {},
      formData    : this.getInitialData()
    }
  },
  computed: {

  },
  mounted () {
    this.obtenerProductos()
  },
  methods: {
    getInitialData() {
      return {
        codigo         : '',
        producto       : '',
        tipo           : null,
        marca          : '',
        precio         : null
      }
    },
    
    filtrar(){

    },

    modificar(index){
      this.formData = this.productos[index]
      console.log("this.formData = ", this.formData)
    },

    cancelarFiltro() {
      this.$router.push('home')
    },

    async obtenerProductos() {
      this.peticion = true
        try{
          let respuesta =  await this.pedirProductosAlServidor()
          this.productos = respuesta.data
          this.peticion = false
        } catch( err ){
          console.error("Ocurrio un error a consultar los productos")
        }
    }



  }
}


