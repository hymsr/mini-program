const app = getApp();
import api from '../../../api/index';

Page({
	data: {
		id: ''
	},
	onLoad: function (match) {
		if (!match.id) return;
		api.getAddress({
			addressId: match.id,
		}).then((res) => {

		});
	},
	formSubmit: function (e) {
		wx.showLoading({
      title: 'loading',
      mask: 'true',
		});
		
		api.newAddress({
			openid: app.globalData.openid,
			id: this.data.id || undefined,
			isDefault: 0,
			...e.detail.value,
		}).then(() => {
			wx.showModal({
				title: '提示',
				content: '提交成功',
				showCancel: false,
			});
			wx.navigateBack({
				delta: 1,
			});
		}).finally(() => {
			wx.hideLoading();
		});
	},
	useDefault: function (e) {
		wx.chooseAddress({
			success: (res) => {
				this.setData({
					addressText: `${res.cityName}-${res.countyName}-${res.detailInfo}`,
					userName: res.userName,
				});
			},
		});
	},
})