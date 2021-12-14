<template>
  <section class="src-components-ya-legeado">

    <div id="login">
      <br>
      <img alt="Vue logo" :src="image">
      <br>
      <br>
      <div class="mx-auto" style="width: 300px;">
        
        <div class="col-30">
          
            <br>
            
            <h2>Ya se encuentra logeado</h2>

            <br>

            <button class="btn btn-primary my-3" 
                    type="submit"
                    id="boton"
                    @click="retornarHome()">
                    HOME
            </button>

        </div>

      </div>
    </div>


  </section>

</template>

<script>

import imageLogo from "../../assets/logo.png"
// import { URL_LOGIN } from "../../../../constants/constants"

export default  {
    name: 'src-components-ya-legeado',
    props: [],
    created() {
    let token = localStorage.token
    console.log('esta logeado? token: ', token)

    if(token === "undefined"){
      console.log("ingresar")
      this.$router.push('noautenticado')
    }else{
      console.log("logeadooo")
    }

   },
    mounted () {

    },
    data () {
      return {
          image  : imageLogo,
      }
    },
    methods: {
      retornarHome() {
          this.$router.push('home')
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

h1 {
    font-style: italic;
  }
  .card-pacientes,
  .card-turnos,
  .card-productos {
    margin: 50px;
    width: 100%;
    height: 200px;
    border: 2px solid #ededed;
    background-color: #fff1fe;
  }
  
  .card-turnos {
    background: #e7fbf3;
  }
  .card-productos {
    background: #e2efff;
  }
  
  .pacientes-icons,
  .productos-icons,
  .turnos-icons {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    background-color: #e5aee1;
    color: white;
  }
  .turnos-icons {
    background-color: #59f5b4;
  }
  .productos-icons {
    background-color: #599ff5;
  }
  .pacientes-detail h2,
  .turnos-detail h2,
  .productos-detail h2 {
    color: #e5aee1;
    font-style: italic;
  }
  .turnos-detail h2 {
    color: #59f5b4;
  }
  .productos-detail h2 {
    color: #599ff5;
  }
  p:hover {
    cursor: pointer;
    font-weight: bold;
  }

  .input-login {
    border: 0;
    background-color: #f1e4f0;
    border-bottom: 2px solid #826a80;
  }

  #login {
    text-align: center;
    background-color: #F1E4F0 ;
    min-height: 100vh; /* Para que el background abarque toda la pantalla */ 
  }
  #boton {
    background: rgb(116, 90, 114);
    border-color:rgb(116, 90, 114);
    width: 75%;
  }

  .alert-dark {
    background-color: #ef9ab36e;
}
  
</style>
