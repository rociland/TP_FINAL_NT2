
import { URL_PACIENTES,
        URL_PACIENTES_CREAR,
        URL_PACIENTES_MODIFICAR
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
              console.log(body)
              let respuesta = await this.axios.post( URL_PACIENTES_CREAR , body )
              console.log(respuesta)
              return respuesta
            }
            catch( err ) {
              console.error('Error en recepcion de datos del servidor ', err)
              return { status: false, msg: `Error, ${err}`}

             }
        },

        async modificarPaciente(body) {
          try {
            let bodyEnviar = {
              nombre         : body.nombre,
              apellido       : body.apellido,
              fecha          : body.fecha,
              tipoDocumento  : body.tipoDocumento,
              dni            : body.dni,
              telefono       : body.telefono,
              domicilio      : body.domicilio,
              piso           : body.piso,
              departamento   : body.departamento
            }
            let respuesta = await this.axios.put( URL_PACIENTES_MODIFICAR + body._id , bodyEnviar )
            return respuesta.data
          }
          catch( err ) {
            console.error('Error en recepcion de datos del servidor ', err)
            return { status: false, msg: `Error, ${err}`}
          }
      },



    }
}
