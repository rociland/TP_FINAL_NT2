import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import image from "../../../../assets/crema.jpg"
import { ProductoServer } from '../../../../funciones/producto'


export default {
  name: 'src-components-producto',
  components: {
    HeaderTitle
  },
  props: [],
  mixins: [ProductoServer],
  data () {
    return {
      titulo      : 'Catalogo de productos / Alta de producto',
      imagen          : image,
      formstate       : {},
      formData        : this.getInitialData()
    }
  },
  computed: {

  },
  mounted () {

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
    
    guardar() {
      let body = { ...this.formData }
      console.log(`Datos ingresados... ${body}`)
      this.crearNuevoProducto( body )
      this.$router.push('home')
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
      this.formData = this.getInitialData()
      this.$router.push('home')
    },

    async crearNuevoProducto( body ) {
        try{
          let respuesta =  await this.crearProducto( body )
          console.log(respuesta)
          this.formData = this.getInitialData()
        } catch( err ){
          console.error("Ocurrio un error a consultar los pacientes")
        }
    }

  

  }
}


