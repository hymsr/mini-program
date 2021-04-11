import api from '../../api/index';
const app = getApp();

// components/address-item/addressItem.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		address: {
			type: String,
		},
		name: {
			type: String,
		},
		tel: {
			type: String,
		},
		addressId: {
			type: Number,
		},
		onSelect: {
			type: Function,
			value: () => {},
		},
	},
	data: {
		checkbox: [
      {value: 'isDefault', name: '默认'},
    ],
	},
	methods: {
		onSelect: function(e) {
			this.properties.onSelect(e);
		},
		onDelete: function(e) {
			this.properties.onDelete(e);
		},
		edit: function() {
			wx.navigateTo({
				url: `/pages/fillLocation/address-form/address-form?id=${this.properties.addressId}`,
			})
		},
		setDefault: function(e) {
			const checkbox = this.data.checkbox[0];
			api.setDefaultAddress({
				openid: app.globalData.openid,
				addressId: this.properties.addressId,
			}).then(() => {
				wx.showModal({
					title: '提示',
					content: '提交成功',
					showCancel: false,
				});
				checkbox.checked = true;
				this.setData({
					checkbox: [checkbox],
				});
			}).catch(() => {
				checkbox.checked = false;
				this.setData({
					checkbox: [checkbox],
				});
			});
		},
 	}
})
