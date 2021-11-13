// import Vue from 'vue'
import { URL_PACIENTES } from "../constants/constants"

export const PacienteServer = {
    data() {
        return {
            
        }
    },
    beforeMount() {
    },
    mounted() {

    },
    methods : {
        async pedirPacientesAlServidor() {
            try {
              let respuesta = await this.axios( URL_PACIENTES )
              console.log("respuesta en el servicio de pacientes", respuesta)
              return respuesta.data
            }
            catch( err ) {
                  console.error('Error en recepcion de datos del servidor ', err)
             }
        }
    }
}

// Vue.mixin(common)