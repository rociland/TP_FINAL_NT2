import { PacienteServer } from '../../../../funciones/paciente'

import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import FiltroPaciente from '../../../Filtro/index.vue'


export default {
  name: 'src-components-tabla-paciente',
  components: {
    HeaderTitle,
    FiltroPaciente
  },
  props: ['aplicoFiltro'],
  mixins: [PacienteServer],
  data () {
    return {
      titulo          : 'Gestion de paciente / Lista de Pacientes',
      peticion        : false,
      pacientes       : [],
      model           : false,
      modelCancelar   : 'VOLVER',
    }
  },
  computed: {

  },
  mounted () {
    console.log(this.aplicoFiltro)
    if(this.aplicoFiltro === undefined)
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
          console.error("Ocurrio un error a consultar los pacientes")
        }
    }

  }
}


