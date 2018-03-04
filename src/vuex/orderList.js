import axios from 'axios'
const state = {
	orderList: [],
	params: ""
}
const mutations = {
	updateOrderList: (state, orderList) => state.orderList = orderList,
	typeOrderList: (state, index) => state.orderList = state.orderList.slice(0, 10 * index + 10)
}
const actions = {
	asyGetOrderList: function({
		commit,
		state
	}) {
		axios.post('api/getTableData')
			.then((res) => {
				commit("updateOrderList", res.data.list);
			})
			.catch((error) => {
				console.log(error)
			})
	},
	typeList: function({
		commit,
		state
	}, index) {
		console.log(index);
		commit("typeOrderList", index);
	}
}
const getters = {
	getOrderList: function(state) {
		return state.orderList;
	}
}
export default {
	state,
	mutations,
	actions,
	getters
}