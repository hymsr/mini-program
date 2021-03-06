Page({
	data: {
		list: [{
			text: '拍照获积分',
			iconPath: '/assets/icons/camera.png',
			selectedIconPath: '/assets/icons/camera_filled.png',
		},
		{
			text: '积分商城',
			iconPath: '/assets/icons/Shopping.png',
			selectedIconPath: '/assets/icons/shopping_filled.png',
		},
		{
			text: '我的',
			iconPath: '/assets/icons/user.png',
			selectedIconPath: '/assets/icons/user_filled.png',
		}],
		currentIndex: 0,
	},
	tabChange(e) {
		this.setData({
			currentIndex: e.detail.index,
		});
	}
});