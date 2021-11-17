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
        dni             : null,
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
      this.openInfo(body);
      this.$router.push('home')
    }, 
    
    openInfo(body){
      this.$notify({
        group: 'foo',
        title: 'Alta de paciente',
        type: 'foo',
        text: `Se creo correctamente el paciente ${body.nombre} ${body.apellido}`
      });
    },

    openError(){
      this.$notify({
        group: 'foo',
        title: 'Alta Paciente',
        type: 'foo',
        text: 'Se creo correctamente el paciente.'
      });
    },
    
    cancelar() {
      this.formData = this.getInitialData()
      this.$router.push('home')
    },

    async crearNuevoPaciente( body ) {
        try{
          let respuesta =  await this.crearPaciente( body )
          console.log(respuesta)
          this.formData = this.getInitialData()
        } catch( err ){
          console.error("Ocurrio un error a consultar los pacientes")
        }
    }

  }
}


