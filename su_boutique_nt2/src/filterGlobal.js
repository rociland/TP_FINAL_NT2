import Vue from 'vue'

Vue.filter('pasarAMayuscula', function(value) {
    return value.toUpperCase()
})


Vue.filter('formatoFecha', function(value) {
    return value.substr(8,2) + "/" + value.substr(5,2) + "/" + value.substr(0,4)
})

Vue.filter('formatoDNI', function(value) {
    return Intl.NumberFormat().format(value)
})

Vue.filter('formatoTel', function(value) {
    return value.substring(0,3)+"-" + value.substring(3,6)+"-" + value.substring(6,9)
})
