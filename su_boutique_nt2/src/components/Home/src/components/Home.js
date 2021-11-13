import image from "../../../../assets/logo.png"
import HeaderTitulo from '../../../comunes/HeaderTitulo.vue'

export default {
  name: 'src-components-home',
  components: {
    HeaderTitulo
  },
  props: [],
  data () {
    return {
      image   : image,
      titulo  : 'Bienvenido a SuBoutique'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


