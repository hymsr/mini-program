Page({
	data: {

	},
	formSubmit: function (e) {
		const pages = getCurrentPages();
		const prevPage = pages[pages.length - 2];//上一个页面
		const addressList = prevPage.data.addressList;
		addressList.push(e.detail.value);
		prevPage.setData({
      addressList,
    });
		wx.navigateBack({
			delta: 1,
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