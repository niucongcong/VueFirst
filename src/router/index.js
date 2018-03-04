import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage'
import Detail from '../pages/detail'
import Analysis from '../pages/detail/analysis'
import Count from '../pages/detail/count'
import Forecast from '../pages/detail/forecast'
import Publish from '../pages/detail/publish'
import OrderList from '../pages/orderList'
Vue.use(Router)
export default new Router({
	mode: "history",
	routes: [{
		path: '/',
		name: 'IndexPage',
		components: {
			"default": IndexPage
		}
	}, {
		path: '/orderList',
		name: 'orderList',
		components: {
			"default": OrderList
		}
	}, {
		path: '/detail',
		name: 'Detail',
		components: {
			"default": Detail
		},
		children: [{
			path: 'analysis',
			component: Analysis
		}, {
			path: 'count',
			component: Count
		}, {
			path: 'forecast',
			component: Forecast
		}, {
			path: 'publish',
			component: Publish
		}]
	}]
})