import api from '../../api/index';
const app = getApp();

Page({
	data: {
		orderList: [],
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