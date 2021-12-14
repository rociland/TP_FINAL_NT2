import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import image from "../../../../assets/crema.jpg"
import {miMixGlobalProducto} from '../../../../mixinsProducto'


export default {
  name: 'src-components-producto',
  components: {
    HeaderTitle
  },
  props: [],
  mixins: [miMixGlobalProducto],
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
  created() {
    let token = localStorage.token
    if(token === "undefined"){
      this.$router.push('noautenticado')
    }

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
      this.crearProducto( body )
      this.formData = this.getInitialData()
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

  }
}


