const doNothing = () => {};

const api = {
	getSession: ({success = doNothing, fail = doNothing, ...data} = {}) => wx.request({
		url: 'https://api.weixin.qq.com/sns/jscode2session',
		method: 'GET',
		data: {
			appid: 'wx6c7ec139de7d2240',
			secret: '4c548790f7f9df8f2326cac317c299f2',
			grant_type: 'authorization_code',
			js_code: data.code,
		},
		success,
		fail,
	}),
}

export default api;