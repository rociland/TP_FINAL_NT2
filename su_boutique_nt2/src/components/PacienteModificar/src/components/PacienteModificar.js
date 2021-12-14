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
      modificar       : false
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

    const hoy = new Date()
    const anioMin = hoy.getFullYear() - 99
    this.fechaMax = `${hoy.getFullYear()}-${hoy.getMonth()+1}-${hoy.getDate()}`
    this.fechaMin = `${anioMin}-${hoy.getMonth()+1}-${hoy.getDate()}`

  },

  methods: {
    
    async modificarDatos( body ) {
        try{
          let respuesta =  await this.modificarPaciente( body )
          console.log(respuesta)
          this.mensaje = respuesta.msg

          let msjRespuesta = ""
          if(!respuesta.msg)
              msjRespuesta = `Se modifico el paciente ${body.apellido}, ${body.nombre} `
          
          this.$emit('mensaje', msjRespuesta)
          this.$bvModal.hide('modal-paciente')
          
        } catch( err ){
          this.openError("Ocurrio un error a consultar los pacientes")
        }
    },

    guardar() {
      this.modificar = true
      let body = { ...this.formData }
      this.modificarDatos( body )
    }, 
  
    cancelar() {
      this.modificar = false
      this.$bvModal.hide('modal-paciente')
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


