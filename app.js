// app.js
import api from './api/index';
App({
  onLaunch() {
    wx.login({
      success: (res) => {
      },
    });
  },
  globalData: {
  }
});
