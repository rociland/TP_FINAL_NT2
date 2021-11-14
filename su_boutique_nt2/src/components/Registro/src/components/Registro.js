import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import image from "../../../../assets/imag1.jpg"
import { PacienteServer } from '../../../../funciones/paciente'

export default {
  name: 'src-components-registro',
  components: {
    HeaderTitle
  },
  props: [],
  mixins: [PacienteServer],
  data () {
    return {
      titulo          : 'Gestion de paciente / Alta de pacientes',
      imagen          : image,
      formstate       : {},
      formData        : this.getInitialData(),
      nombreMinLength : 5,
      nombreMaxLength : 15,
      minEdad         : 18,
      maxEdad         : 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return {
        nombre          : '',
        apellido        : '',
        fecha           : null,
        tipo_documento  : '',
        nro_documento   : null,
        telefono        : '',
        domicilio       : '',
        piso            : '',
        departamento    : ''
      }
    },
    guardar() {
      let body = { ...this.formData }
      console.log(`Datos ingresados... ${body}`)
      this.crearNuevoPaciente( body )
    }, 

    async crearNuevoPaciente( body ) {
        try{
          let respuesta =  await this.crearPaciente( body )
          console.log(respuesta)
        } catch( err ){
          console.error("Ocurrio un error a consultar los pacientes")
        }
    }

  }
}


