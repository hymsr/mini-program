// components/list-entry.js
Component({
  /**
	 * 组件的属性列表
	 */
  properties: {
    headIconUrl: {
      type: String,
    },
    jumpUrl: {
      type: String,
    },
    text: {
      type: String,
    }
  },

  /**
	 * 组件的初始数据
	 */
  data: {
  },

  /**
	 * 组件的方法列表
	 */
  methods: {
    jumpTo() {
      wx.navigateTo({
        url: this.properties.jumpUrl,
      });
    },
  }
});
