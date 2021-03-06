import Vue from 'vue'
import App from './App.vue'

import vueEventCalendar from '../src/'
// import vueEventCalendar from '../dist'
// import '../dist/style.css'
import '../src/static/style.less'
Vue.use(vueEventCalendar, {locale: 'en', weekStartOn: 6})

new Vue({
  el: '#app',
  render: h => h(App)
})
