import HeaderTitle from '../../../comunes/HeaderTitulo.vue'

export default {
  name: 'src-components-registro',
  components: {
    HeaderTitle
  },
  props: [],
  data () {
    return {
      titulo    : 'Gestion de paciente / Alta de pacientes',
      formstate : {},
      formData  : this.getInitialData(),
      nombreMinLength : 5,
      nombreMaxLength : 15,
      minEdad : 18,
      maxEdad : 120
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return {
        nombre : '',
        edad: null,
        email: null
      }
    }

  }
}


