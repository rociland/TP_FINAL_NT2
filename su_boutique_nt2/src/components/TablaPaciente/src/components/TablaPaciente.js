import { PacienteServer } from '../../../../funciones/paciente'

import HeaderTitle from '../../../comunes/HeaderTitulo.vue'

export default {
  name: 'src-components-tabla-paciente',
  components: {
    HeaderTitle
  },
  props: [],
  mixins: [PacienteServer],
  data () {
    return {
      titulo    : 'Gestion de paciente / Lista de Pacientes',
      peticion : false,
      pacientes : []
    }
  },
  computed: {

  },
  mounted () {
    this.obtenerPacientes()
    
  },
  methods: {
    
    async obtenerPacientes() {
      this.peticion = true
        try{
          let respuesta =  await this.pedirPacientesAlServidor()
          this.pacientes = respuesta.data
          this.peticion = false
        } catch( err ){
          console.err("Ocurrio un error a consultar los pacientes")
        }
    }

  }
}


