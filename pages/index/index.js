const app = getApp();

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
		profileUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
		isLogin: 'false',
	},
	onLoad() {
		this.setData({
			userInfo: app.globalData.userInfo,
			isLogin: !!app.globalData.userInfo,
		});
	},
	tabChange(e) {
		this.setData({
			currentIndex: e.detail.index,
		});
	},
	imageLoad: function (e) {
		const $width = e.detail.width,    //获取图片真实宽度
			$height = e.detail.height,
			ratio = $width / $height;   //图片的真实宽高比例
		const viewWidth = 150,           //设置图片显示宽度，
			viewHeight = 150 / ratio;    //计算的高度值   
		this.setData({
			imgwidth: viewWidth,
			imgheight: viewHeight
		});
	},
	getUserInfo(e) {
		app.globalData.userInfo = e.detail.userInfo;
		this.setData({
			userInfo: e.detail.userInfo,
			isLogin: true,
		});
	},
});