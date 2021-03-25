// app.js
import api from './api/index';
import ls from './utils/local-storage';
App({
  require : function($uri){return require($uri)},
  onLaunch() {
    wx.showLoading({
      title: '加载中',
      mask: 'true',
    });
    wx.login({
      success: (res) => {
        api.getOpenId({
          data: {
            code: res.code,
          },
          success: (res) => {
            this.globalData.openid = res.openid;
          },
          fail: () => {
          },
          complete: () => {
            wx.hideLoading();
          },
        })
      },
    });
  },
  globalData: {
    userInfo: ls.get('userInfo'),
  },
});
