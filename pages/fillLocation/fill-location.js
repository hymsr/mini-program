// pages/fillLocation/fill-location.js
Page({

  data: {
    addressList: [],
  },
  onLoad: function () {
    
  },
  newAddress() {
    wx.navigateTo({
      url: './address-form/address-form',
    });
  },
});