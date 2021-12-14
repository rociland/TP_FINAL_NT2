import { PacienteServer } from '../../../../funciones/paciente'

import HeaderTitle from '../../../comunes/HeaderTitulo.vue'
import PacienteModificar from '../../../PacienteModificar/index.vue'

export default {
  name: 'src-components-tabla-paciente',
  components: {
    HeaderTitle,
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
      textFiltro  : "",
      formData        : this.getInitialData()
    }
  },
  computed: {

  },
  mounted () {
   
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
    },

    eventPacientes(){
      return this.pacientes.filter( item => {
                                      return ( item.dni.toUpperCase().indexOf(this.textFiltro.toUpperCase()) > -1  
                                            || item.apellido.toUpperCase().indexOf(this.textFiltro.toUpperCase()) > -1  
                                            || item.nombre.toUpperCase().indexOf(this.textFiltro.toUpperCase()) > -1 
                                            || item.fecha.toUpperCase().indexOf(this.textFiltro.toUpperCase()) > -1 
                                            || item.telefono.toUpperCase().indexOf(this.textFiltro.toUpperCase()) > -1 
                                            || item.domicilio.toUpperCase().indexOf(this.textFiltro.toUpperCase()) > -1  ) })
    },

    cancelarFiltro() {
      this.$router.push('home')
    },

    handleChange(event) {
      this.textFiltro = event.target.value;
    }


  }
}


