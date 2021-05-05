import moment from 'moment';

Component({
	properties: {
		id: {
			type: Number,
		},
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
		date: moment.unix(this.properties.time / 1000).format('YYYY-MM-DD HH:mm:ss'),
	},
	methods: {

	}
})
