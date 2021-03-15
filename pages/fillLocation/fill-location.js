// pages/fillLocation/fill-location.js
Page({
  data: {
    addressList: new Array(100).fill({}),
    deleteAddress: function () {
      console.log(1);
    },
  },
  onShow: function () {
  },
  newAddress() {
    wx.navigateTo({
      url: './address-form/address-form',
    });
  },
});