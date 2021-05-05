// components/goodsItem/goodsItem.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		goodsId: {
			type: String,
		},
		name: {
			type: String,
		},
		image: {
			type: String,
		},
		needScore: {
			type: Number,
		},
	},
	data: {

	},
	methods: {
		buyNow() {
			wx.navigateTo({
				url: `/pages/Settlement/Settlement?id=${this.properties.goodsId}`,
			});
		},
	}
})
