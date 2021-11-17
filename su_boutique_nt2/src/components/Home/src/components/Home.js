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
      titulo        : 'Bienvenido a SuBoutique',
      model         : true,
      modelCancelar : 'CANCELAR'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


