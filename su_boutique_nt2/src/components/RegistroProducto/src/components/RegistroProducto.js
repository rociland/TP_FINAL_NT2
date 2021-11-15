import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import image from "../../../../assets/crema.jpg"

export default {
  name: 'src-components-registro-producto',
  components: {
    HeaderTitle
  },
  props: [],
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
      // let body = { ...this.formData }
      // console.log(`Datos ingresados... ${body}`)
      // this.crearNuevoPaciente( body )
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
      // this.formData = this.getInitialData()
      // this.$router.push('home')
    },

    // async crearNuevoPaciente( body ) {
    //     try{
    //       let respuesta =  await this.crearPaciente( body )
    //       console.log(respuesta)
    //       this.formData = this.getInitialData()
    //     } catch( err ){
    //       console.error("Ocurrio un error a consultar los pacientes")
    //     }
    // }

  

  }
}


