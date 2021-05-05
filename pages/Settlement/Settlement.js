import api from '../../api/index';
const app = getApp();

Page({
	data: {
		address: {
			name: "name",
			tel: "17802007048",
			detailAddress: "123-131-123",
		},
	},
	onLoad: function (match) {
		(async function () {
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
				this.setData({
					address: address.address,
					good: good.commodity,
				});
				wx.hideLoading();
			} catch (e) {
				wx.hideLoading();
			}
		})();
	},
	method: {
		edit() {
			console.log(1);
			wx.navigateTo({
				url: '/pages/fillLocation/fill-location',
			});
		},
	},
	edit() {
		console.log(1);
		wx.navigateTo({
			url: '/pages/fillLocation/fill-location',
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