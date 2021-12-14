import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import image from "../../../../assets/crema.jpg"
// import { ProductoServer } from '../../../../funciones/producto'
import {miMixGlobalProducto} from '../../../../mixinsProducto'

export default {
  name: 'src-components-producto-modificar',
  components: {
    HeaderTitle
  },
  props: ['formData'],
  mixins: [miMixGlobalProducto],
  data () {
    return {
      titulo      : 'Catalogo de productos / Alta de producto',
      imagen      : image,
      formstate   : {}
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
    getInitialData() {
      return {
        codigo    : '',
        producto  : '',
        tipo      : null,
        marca     : '',
        precio    : null
      }
    },
    
    guardar() {
      let body = { ...this.formData }
      this.modificarProducto( body )
      this.$bvModal.hide('modal-producto') 
    }, 
    
    openError(){
      this.$notify({
        group: 'error',
        title: 'Error',
        type: 'error',
        text: 'Ocurrio un error al guardar el producto.'
      });
    },
    
    cancelar() {
      console.log(2)
      this.$bvModal.hide('modal-producto') 
    },

    // async guardarProductoServicio( body ) {
    //     try{
    //       let respuesta =
    //       //  await this.guardarProducto( body )
    //       console.log(respuesta)
    //       // this.formData = this.getInitialData()
    //     } catch( err ){
    //       console.error("Ocurrio un error a consultar los pacientes")
    //     }
    // }

  

  }
}


