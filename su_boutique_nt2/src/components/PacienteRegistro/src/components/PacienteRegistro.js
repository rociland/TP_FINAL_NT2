import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import NotificarOK from '../../../comunes/NotificarOK.vue'
import image from "../../../../assets/imag1.jpg"
import { PacienteServer } from '../../../../funciones/paciente'

export default {
  name: 'src-components-paciente-registro',
  components: {
    HeaderTitle,
    NotificarOK
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
      maxEdad         : 120,
      fechaMax        : '',
      fechaMin        : ''
    }
  },
  computed: {

  },
  mounted () {
    const hoy = new Date()
    const anioMin = hoy.getFullYear() - 99
    this.fechaMax = `${hoy.getFullYear()}-${hoy.getMonth()+1}-${hoy.getDate()}`
    this.fechaMin = `${anioMin}-${hoy.getMonth()+1}-${hoy.getDate()}`

  },
  methods: {
    getInitialData() {
      return {
        nombre          : '',
        apellido        : '',
        fecha           : null,
        tipoDocumento   : '',
        dni             : null,
        telefono        : '',
        domicilio       : '',
        piso            : '',
        departamento    : ''
      }
    },
    
    guardar() {
        this.error = false
        let body = { ...this.formData }
        this.crearNuevoPaciente( body )
    }, 
  
    openInfo(body){
      this.$notify({
        group: 'foo',
        title: 'Alta de paciente',
        type: 'foo',
        text: `Se creo correctamente el paciente ${body.nombre} ${body.apellido}`
      });
    },

    openError(mensaje){
      this.$notify({
        group: 'error',
        title: 'Error!',
        type: 'error',
        text: mensaje
      });
    },
    
    cancelar() {
      this.formData = this.getInitialData()
      this.$router.push('home')
    },

    async crearNuevoPaciente( body ) {
        try{
          let respuesta =  await this.crearPaciente( body )
          if( !respuesta.status ) this.openError(respuesta.msg)
          else this.openInfo(body)
        } catch( err ){
          this.openError("Ocurrio un error a consultar los pacientes")
        }
    }

  }
}


