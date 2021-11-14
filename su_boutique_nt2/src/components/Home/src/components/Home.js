import image from "../../../../assets/logo.png"
import HeaderTitulo from '../../../comunes/HeaderTitulo.vue'
import FiltroPaciente from '../../../Filtro/index.vue'

export default {
  name: 'src-components-home',
  components: {
    HeaderTitulo,
    FiltroPaciente
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


