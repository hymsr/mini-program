import api from '../../api/index';
const app = getApp();

Page({
	data: {
		orderList: [
			{
				id: "order_id",
				time: 100000,
				status: "已发货",
				commodity: {
					id: 1,
					name: "name",
					needScores: 500,
					image: "image",
					inventory: 2,
					isForSale: 1
				},
				address: {
					id: 123,
					name: "name",
					tel: "tel",
					detailAddress: "detailAddress",
				},
			},
		]
	},
	onLoad: function (options) {
		api.getOrderList({
			openid: app.globalData.openid,
		}).then(res => {
			this.setData({
				orderList: res.orderList,
			});
		});
	},
	onReady: function () {

	},

	onShow: function () {

	},

	onHide: function () {

	},
	onUnload: function () {

	},
	onPullDownRefresh: function () {

	},
	onReachBottom: function () {

	},
	onShareAppMessage: function () {

	}
})