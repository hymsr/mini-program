const app = getApp();
import api from '../../api/index';
import ls from '../../utils/local-storage'
import cos from '../../utils/cos';
import md5 from '../../utils/md5';

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
		searchInput: '',
		goodsList: [
		],
	},
	onLoad() {
		this.setData({
			userInfo: app.globalData.userInfo,
			isLogin: !!app.globalData.userInfo,
		});
	},
	recordVideo() {
		wx.chooseVideo({
			sourceType: ['camera'],
			maxDuration: 30,
			camera: 'back',
			success(res) {
				const filePath = res.tempFilePath;
				const filename = filePath.substr(filePath.lastIndexOf('/') + 1);
				cos.upload(filePath, filename).then((res) => {
					api.commitVideo({
						openid: app.globalData.openid,
						url: res.headers.location,
					}).then(res => {
						console.log(res);
						wx.showToast({
							title: res,
						});
					});
				});
			},
		});
	},
	tabChange(e) {
		this.setData({
			currentIndex: e.detail.index,
		});
		if (e.detail.index === 1) {
			if (!this.data.init) {
				this.startSearch();
				this.setData({
					init: true,
				});
			}
		}
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
		ls.set('userInfo', e.detail.userInfo);
		this.setData({
			userInfo: e.detail.userInfo,
			isLogin: true,
		});
	},
	startSearch() {
		wx.showLoading({
      title: '加载中',
      mask: 'true',
    });
		api.getGoods({
			page_index: 1,
			page_size: -1,
		}).then(res => {
			this.setData({
				goodsList: res.commodity,
			});
		}).finally(() => {
			wx.hideLoading();
		});
	},
	onSearchChange(e) {
		this.setData({
			searchInput: e.detail.value,
		});
	},
});