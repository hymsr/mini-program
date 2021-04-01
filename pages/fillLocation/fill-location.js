import api from '../../api/index';
const app = getApp();

Page({
  data: {
    addressList: [{
      id: 12,
      detailAddress: '地址',
      name: '名字',
      tel: '123123',
    }],
    deleteAddress: function () {
      console.log(1);
    },
  },
  onLoad: function () {
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
  onShow: function () {
  },
  newAddress() {
    wx.navigateTo({
      url: './address-form/address-form',
    });
  },
});