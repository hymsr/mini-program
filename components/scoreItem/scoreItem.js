import moment from 'moment';

Component({
	lifetimes: {
    attached: function() {
      this.setData({
				date: moment.unix(this.properties.time / 1000).format('YYYY-MM-DD HH:mm:ss'),
			})
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
	properties: {
		changeScores: {
			type: Number,
		},
		time: {
			type: Number,
		},
		remark: {
			type: String,
		},
	},
	data: {
	},
	methods: {

	}
})
