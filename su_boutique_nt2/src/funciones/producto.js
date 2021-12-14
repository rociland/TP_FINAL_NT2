import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import { 
    URL_PRODUCTOS,
    URL_PRODUCTOS_CREAR,
    URL_PRODUCTOS_GUARDAR,
    URL_PRODUCTOS_BORRAR
   } from "../constants/constants"


export default new Vuex.Store({
    state : {
        msj: "",
        msjCrear: "",
        result : []
    },
    actions : {
      async pedirProductosAlServidor({commit}) {
        try {
          let {data:result} =  await axios( URL_PRODUCTOS )
          console.log("respuesta en el servicio de productos", result)
          commit('setRespuesta', result)
        }
        catch( err ) {
            console.error('Error en recepcion de datos del servidor ', err)
        }
    },

    async crearProducto({commit}, body) {
        try {
          let result = await axios.post( URL_PRODUCTOS_CREAR , body )
          console.log("respuesta al crear: ", result)
          console.log(result.data.msg)
          commit('setMensajeC', result.data.msg)  
        }
        catch( err ) {
              console.error('Error en recepcion de datos del servidor ', err)
         }
    },

    async guardarProducto({commit}, body) {
        try {
          
          let id = body._id 
          
          let bodyE = {
            codigo   : body.codigo,
            producto : body.producto,
            tipo     : body.tipo,
            marca    : body.marca,
            precio   : body.precio
          }
          let result = await axios.put( URL_PRODUCTOS_GUARDAR + id , bodyE )
          console.log("respuesta al modificar: ", result)
          console.log(result.data.msg)
           commit('setMensaje', result.data.msg)          
        }
        catch( err ) {
              console.error('Error en recepcion de datos del servidor ', err)
            }
        },
      async borrarProducto({commit}, id) {
        try {
          let result = await axios.delete( URL_PRODUCTOS_BORRAR + id )
          console.log("respuesta al borrar: ", result)
          commit('setRespuesta', result.data.resultado)
          commit('setMensajeC', result.data.msg)  
        }
        catch( err ) {
              console.error('Error en recepcion de datos del servidor ', err)
            }
        }
    },
    mutations : {
      setMensaje(state, msj) {
          state.msj = msj
      },
      setMensajeC(state, msjCrear) {
        state.msjCrear = msjCrear
    },
        setRespuesta(state, result) {
            state.result = result
        }
     }
})
