import image from "../../../../assets/logo.png"
import HeaderTitulo from '../../../comunes/HeaderTitulo.vue'
import PacienteFiltro from '../../../PacienteFiltro/index.vue'

export default {
  name: 'src-components-home',
  components: {
    HeaderTitulo,
    PacienteFiltro
  },
  props: [],
  data () {
    return {
      image         : image,
      titulo        : "",
      model         : true,
      modelCancelar : 'CANCELAR',
      color1        : "#fff1fe",
      color2        : "#e2efff",
      colorCard1    : "#e5aee1",
      colorCard2    : "#599ff5"
    }
  },
  computed: {

  },
  created() {
    let token = localStorage.token
    console.log('esta logeado? token: ', token)

    if(token === "undefined"){
      console.log("ingresar")
      this.$router.push('noautenticado')
    }else{
      console.log("logeadooo")
      this.titulo = "Bienvenido a SuBoutique"
    }

  },
  mounted () {
    console.log('Bienvenida -> Mounted')
  },
  methods: {
    cambiar() {
      
      let aux = this.color1
      this.color1 = this.color2
      this.color2 = aux

      aux = this.colorCard1
      this.colorCard1 = this.colorCard2
      this.colorCard2 = aux
      
    },
    

  }
}


