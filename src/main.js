// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'

window.Vue = Vue // 要在vue-i18n实例化之前执行

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh',
  messages: { } // 省略具体内容
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
