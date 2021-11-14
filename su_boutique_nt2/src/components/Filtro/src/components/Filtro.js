
export default {
  name: 'src-components-filtro',
  components: {},
  props: ['model', 'nombreCancelar'],
  data () {
    return {
      formstate   : {},
      formData    : this.getInitialData()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return {
        nombre          : '',
        apellido        : '',
        nro_documento   : null
      }
    },
    buscar() {
        console.log("buscando...")
    },
    cancelar() {
      this.formData = this.getInitialData()
      if(this.model)  { this.$bvModal.hide('modal-filtro') }
      else { this.$router.push('home') }
    }
  }
}


