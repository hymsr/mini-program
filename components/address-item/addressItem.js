// components/address-item/addressItem.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		address: {
			type: String,
		},
		userName: {
			type: String,
		},
		phone: {
			type: String,
		},
		key: {
			type: String,
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
	}
})
