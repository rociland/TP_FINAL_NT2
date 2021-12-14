import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import ProductoModificar from '../../../ProductoModificar/index.vue'

import {miMixGlobalProducto} from '../../../../mixinsProducto'


export default {
  name: 'src-components-productos-registrados',
  components: {
    HeaderTitle,
    ProductoModificar
  },
  props: [],
  mixins: [miMixGlobalProducto],
  data () {
    return {
      titulo      : 'Catalogo de productos / Lista de productos',
      peticion    : false,
      productos   : [],
      formstate   : {},
      textFiltro  : "",
      formData    : this.getInitialData()
    }
  },
  computed: {

  },
  filters : {
    currency: function(value,signo) {
    return signo + Number(value==''? 0 : value).toFixed(2)
    }
  },
  created() {
    let token = localStorage.token
    console.log('esta logeado? token: ', token)

    if(token === "undefined"){
      console.log("ingresar")
      this.$router.push('noautenticado')
    }else{
      console.log("logeadooo")
    }

  },
  mounted () {
    this.buscarProductos()
  },
  
  methods: {
    getInitialData() {
      return {
        codigo         : '',
        producto       : '',
        tipo           : null,
        marca          : '',
        precio         : null,
        textModificar : ""
      }
    },
    
    filtrar(){

    },

    async modificar(productoSelect){
      this.formData = productoSelect
      this.$bvModal.show('modal-producto') 
    },

    borrar(id) {
      this.borrarProducto(id)
    },

    cancelarFiltro() {
      this.$router.push('home')
    }

  }
}


