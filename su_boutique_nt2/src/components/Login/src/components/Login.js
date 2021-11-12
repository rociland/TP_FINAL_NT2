
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
      msj        : "OK"
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
              console.log("verificarIngreso", dataIngresada)
                let body  = { usuario : dataIngresada.usuario, password: dataIngresada.contrasenia }
                let respuesta = await this.axios.post( URL_LOGIN, body )
                let data = respuesta.data
                console.log(data)
                this.peticion = false
                this.msj = (data && data.msg ? "Los datos ingresados no son correctos, verificar usuario y contraseña" : "OK")
                if(data && data.usuario) {this.$router.push('home')}
          } catch ( err ) {
              console.error('Error en recepcion de datos del servidor, ', err )
              this.msj = "Ocurrio un error en la recepcion del servicio"
        }
    }
  }
}


