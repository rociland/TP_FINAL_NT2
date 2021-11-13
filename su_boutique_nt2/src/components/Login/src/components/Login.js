
import image from "../../../../assets/logo.png"
import { URL_LOGIN } from "../../../../constants/constants"
export default {
  name: 'src-components-login',
  components: {},
  props: [],
  data () {
    return {
      image      : image,
      formstate  : {},
      formData   : this.getInicio(),
      peticion   : false,
      msg        : "OK"
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicio(){
      return {
        usuario: '',
        contrasenia: ''
      }
    },
    ingresar() {
       let data = { ...this.formData }
       console.log(`Datos ingresados... Usuario: ${data.usuario} - contrasenia: ${data.contrasenia}`)
       this.verificarIngreso(data)
    },
    async verificarIngreso( dataIngresada ) {
        this.peticion = true;
        try {
                let body  = { usuario : dataIngresada.usuario, password: dataIngresada.contrasenia }
                let respuesta = await this.axios.post( URL_LOGIN, body )
                let data = respuesta.data
                this.peticion = false
                this.msg = data.msg
                // "Los datos ingresados no son correctos, verificar usuario y contraseña"
                if(data && data.status) {
                  this.$router.push('home')
                }
          } catch ( err ) {
              console.error('Error en recepcion de datos del servidor, ', err )
              this.msg = "Ocurrio un error en la recepcion del servicio"
        }
    }
  }
}


