
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
  created() {
    let token = localStorage.token
    console.log('esta logeado? token: ', token)

    if(token === "undefined"){
      console.log("ingresar")
    }else{
      console.log("logeadooo")
      this.$router.push('yalogeado')
    }

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
                this.peticion = false
                console.log(respuesta)
                if(respuesta.data) {
                  this.msg = 'OK'
                  localStorage.token = respuesta.data.token
                  this.$router.push('home')
                }
          } catch ( err ) {
              console.error('Error en recepcion de datos del servidor, ', err )
              this.msg = err.response.data
        }
    }
  }
}


