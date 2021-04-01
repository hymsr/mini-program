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
		onDelete: {
			type: Function,
			value: () => {},
		}
	},
	data: {

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
	}
})
