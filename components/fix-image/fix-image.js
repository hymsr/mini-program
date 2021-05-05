// components/fix-image.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		src: {
			type: String,
		},
		fixWidth: {
			type: Number,
		},
		fixHeight: {
			type: Number,
		},
		isCircle: {
			type: Boolean,
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		imgwidth: 40,
		imgheight: 40,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		imageLoad: function (e) {
			const $width = e.detail.width,    //获取图片真实宽度
				$height = e.detail.height,
				ratio = $width / $height;   //图片的真实宽高比例
			let viewHeight, viewWidth;
			if (this.properties.fixHeight) {
				viewHeight = this.properties.fixHeight,
				viewWidth = viewHeight * ratio;
			} else {
				viewWidth = this.properties.fixWidth,
				viewHeight = viewWidth / ratio;
			}
			this.setData({
				imgwidth: viewWidth,
				imgheight: viewHeight
			});
		},
	}
});
