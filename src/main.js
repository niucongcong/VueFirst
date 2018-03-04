import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App'
import router from './router'
import mock from './mock/mock'
import store from './vuex/index.js'
Vue.config.productionTip = false
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})