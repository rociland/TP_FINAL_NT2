
import image from "../../../../assets/logo.png"
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
      url        : "https://61848a0dac0b850017489eb1.mockapi.io/suboutiquee/usuarios",
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
                let respuesta = await this.axios( this.url )
                let data = respuesta.data
                let encontrado = false;
                let index = 0;

                while( index < data.length && !encontrado) {
                  encontrado = ( data[index].name === dataIngresada.usuario 
                        && data[index].pass === dataIngresada.contrasenia)
                  index ++;
                }
                this.peticion = false
                this.msj = (!encontrado ? "Los datos ingresados no son correctos, verificar usuario y contraseña" : "OK")
                if(encontrado) {this.$router.push('registro')}
          } catch ( err ) {
              console.error('Error en recepcion de datos del servidor, ', err )
              this.msj = "Ocurrio un error en la recepcion del servicio"
        }
    }
  }
}


