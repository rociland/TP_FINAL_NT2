import { ProductoServer } from '../../../../funciones/producto'


import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import ModificarProducto from '../../../RegistroProducto/index.vue'


export default {
  name: 'src-components-tabla-producto',
  components: {
    HeaderTitle,
    ModificarProducto
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
    
    cancelar() {

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


