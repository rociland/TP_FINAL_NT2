import { PacienteServer } from '../../../../funciones/paciente'

import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import PacienteFiltro from '../../../PacienteFiltro/index.vue'
import PacienteModificar from '../../../PacienteModificar/index.vue'

export default {
  name: 'src-components-tabla-paciente',
  components: {
    HeaderTitle,
    PacienteFiltro,
    PacienteModificar
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
      formData        : this.getInitialData()
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
    
    prueba(index){
      console.log("asdad", index)
    },

    modificar(index) {
      this.formData = this.pacientes[index]      
      console.log("this.formData = ", this.formData)
    },

    async obtenerPacientes() {
      this.peticion = true
        try{
          this.pacientes =  await this.pedirPacientesAlServidor()
          this.peticion = false
        } catch( err ){
          this.mensaje = `Ocurrio un error a consultar los pacientes. ${err}`
          console.error("Ocurrio un error a consultar los pacientes")
          this.mostrarError()
        }
    },

    mostrarError(){
      this.$notify({
        group: 'error',
        title: 'Error!',
        type: 'error',
        text: this.mensaje
      });
    }

  }
}


