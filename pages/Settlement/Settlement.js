import api from '../../api/index';
const app = getApp();

Page({
	data: {
		address: {
			id: "id",
			name: "测试姓名",
			tel: "17802007048",
			detailAddress: "123-321-123",
		},
		commodity: {
			id: "id",
			name: "小米手机",
			needScores: "500",
			image: "https://www.liiux.cn/server/image/commodity/72cfc318835e4979b9524dc758c4301d.jpeg",
			inventory: "inventory",
			isForSale: 1,
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