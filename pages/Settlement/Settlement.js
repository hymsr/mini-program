import api from '../../api/index';
const app = getApp();

Page({
	data: {
		address: {
		},
		commodity: {
		},
	},
	onLoad: function (match) {
		(async () => {
			wx.showLoading({
				title: '加载中',
				mask: 'true',
			});
			try {
				const address = await api.getDefaultAddress({
					openid: app.globalData.openid,
				});
				const good = await api.getGoodsItem({
					id: match.id,
				});
				const score = await api.getScore({
					openid: app.globalData.openid,
				});
				this.setData({
					address: address.address,
					commodity: good.commodity,
					score: score.scores,
				});
				wx.hideLoading();
			} catch (e) {
				wx.hideLoading();
			}
		})();
	},
	edit() {
		wx.navigateTo({
			url: '/pages/fillLocation/fill-location',
		});
	},
	buy() {
		api.createOrder({
			openid: app.globalData.openid,
			addressId: this.data.address.id,
			commodityId: this.data.commodity.id,
		}).then(res => {
			wx.showModal({
				title: '提示',
				content: '购买成功',
				showCancel: false,
				success: () => {
					wx.navigateBack({
						delta: 1,
					});
				},
			});
		});
	},
	cancel() {
		wx.navigateBack({
			delta: 1,
		});
	},
	onReady: function () {

	},
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})