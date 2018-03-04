import Vue from 'vue'
import Vuex from 'vuex'
import oederList from './orderList'
Vue.use(Vuex)
let store = new Vuex.Store({
	modules: {
		oederList
	}
});

export default store;