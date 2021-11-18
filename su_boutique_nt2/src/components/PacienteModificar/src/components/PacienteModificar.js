import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import NotificarOK from '../../../comunes/NotificarOK.vue'

import { PacienteServer } from '../../../../funciones/paciente'

export default {
  name: 'src-components-paciente-modificar',
  components: {
    HeaderTitle,
    NotificarOK
  },
  props: ['formData'],
  mixins: [PacienteServer],
  data () {
    return {
      formstate       : {},
      nombreMinLength : 5,
      nombreMaxLength : 15,
      minEdad         : 18,
      maxEdad         : 120,
      fechaMax        : '',
      fechaMin        : '',
      mensaje         : '',
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
    
    guardar() {
        this.error = false
        let body = { ...this.formData }
        this.modificarDatos( body )
    }, 
  
    cancelar() {
      // this.formData = this.getInitialData()
      this.$bvModal.hide('modal-paciente')
    },

    async modificarDatos( body ) {
        try{
          let respuesta =  await this.modificarPaciente( body )
          this.mensaje = respuesta.msg
          if( !respuesta.status ) 
            this.openError()
          else {
            this.$bvModal.hide('modal-paciente')
            this.openInfo()
          }
        } catch( err ){
          this.openError("Ocurrio un error a consultar los pacientes")
        }
    },

    openInfo(){
      this.$notify({
        group: 'foo',
        title: 'Alta de paciente',
        type: 'foo',
        text: `Se modifico el paciente correctamente`
      });
    },

    openError(){
      this.$notify({
        group: 'error',
        title: 'Error!',
        type: 'error',
        text: this.mensaje
      });
    }

  }
}


