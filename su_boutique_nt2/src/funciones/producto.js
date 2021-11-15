
import { 
    URL_PRODUCTOS,
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
            }
        }
}
