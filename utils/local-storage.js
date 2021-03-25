const ls = {
	set: (key, item) => {
		wx.setStorage({
			key,
			data: item,
		});
	},
	get: (key) => {
		return wx.getStorageSync(key);
	},
};

export default ls;