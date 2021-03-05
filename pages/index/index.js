import { a } from '../../api/index';
const app = getApp();

Page({
	data: {
		list: [{
			text: '对话',
		},
		{
			text: '商城',
		},
		{
			text: '我的',
		}]
	},
	tabChange(e) {
		console.log('tab change', e);
	}
});