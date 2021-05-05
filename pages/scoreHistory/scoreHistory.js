import api from "../../api/index";
const app = getApp();

// pages/scoreHistory/scoreHistory.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		scoreChangeList: [
			{
				"id": 1,
				"changeScores": 3,
				"time": 160000000000, 
				"remark": "remark"
			}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		api.getScoreHistory({
			openid: app.globalData.openid,
		}).then(res => {
			this.setData({
				scoreChangeList: res.scoreChangeList,
			});
		});
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