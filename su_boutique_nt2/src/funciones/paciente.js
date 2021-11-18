// import Vue from 'vue'
import { URL_PACIENTES,
        URL_PACIENTES_CREAR 
       } from "../constants/constants"

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
              return respuesta.data
            }
            catch( err ) {
                  console.error('Error en recepcion de datos del servidor ', err)
             }
        },
        async crearPaciente(body) {
            try {
              let respuesta = await this.axios.post( URL_PACIENTES_CREAR , body )
              return respuesta.data
            }
            catch( err ) {
              console.error('Error en recepcion de datos del servidor ', err)
              return { status: false, msg: `Error, ${err}`}

             }
        },
    }
}

// Vue.mixin(common)