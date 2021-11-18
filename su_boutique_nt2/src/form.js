import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators : {
        'no-espacios' : (value) => !value.includes(' ') 
        
    }
}


Vue.use(VueForm, options)