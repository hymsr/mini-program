import api from '../../api/index';
const app = getApp();

Page({
  data: {
    addressList: [],
  },
  onLoad: function () {
  },
  onShow: function () {
    wx.showLoading({
      title: '加载中',
      mask: 'true',
    });
    api.getAllAddress({
      openid: app.globalData.openid,
    }).then((res) => {
      this.data.addressList = res;
    }).finally(() => wx.hideLoading());
  },
  newAddress() {
    wx.navigateTo({
      url: './address-form/address-form',
    });
  },
});