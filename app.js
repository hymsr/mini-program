// app.js
import api from './api/index';
import ls from './utils/local-storage';
App({
  require: function ($uri) { return require($uri) },
  onLaunch() {
    wx.showLoading({
      title: '加载中',
      mask: 'true',
    });
    wx.login({
      success: (res) => {
        api.getOpenId({
          code: res.code,
        })
          .then(res => {
            this.globalData.openid = res.openid;
          })
          .catch(() => wx.redirectTo({
            url: '/pages/failPage/failPage',
          }))
          .finally(() => wx.hideLoading());
      },
      fail: () => {
        wx.hideLoading();
        wx.redirectTo({
          url: '/pages/failPage/failPage',
        });
      },
    });
  },
  globalData: {
    userInfo: ls.get('userInfo'),
  },
});
