
import { 
    URL_PRODUCTOS,
    URL_PRODUCTOS_CREAR,
   } from "../constants/constants"

export const ProductoServer = {
        data() {
            return {
                
            }
        },
        beforeMount() {
        },
        mounted() {

        },
        methods : {
            async pedirProductosAlServidor() {
                try {
                let respuesta = await this.axios( URL_PRODUCTOS )
                console.log("respuesta en el servicio de productos", respuesta)
                return respuesta.data
                }
                catch( err ) {
                    console.error('Error en recepcion de datos del servidor ', err)
                }
            },

            async crearProducto(body) {
                try {
                  let respuesta = await this.axios.post( URL_PRODUCTOS_CREAR , body )
                  console.log("respuesta al crear: ", respuesta)
                  return respuesta.data
                }
                catch( err ) {
                      console.error('Error en recepcion de datos del servidor ', err)
                 }
            }
        }
}
