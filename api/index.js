const doNothing = () => { };

// const withBasicData = (data = {}) => {
//   data.user = '';
//   return;
// };

const host = 'http://localhost:8080';
const pHost = 'http://localhost:5000';

const handleErr = (msg) => {
    wx.showModal({
      title: '提示',
      content: msg || '请求失败',
      showCancel: false,
    });
}

const request = ({ data, url, method = 'POST' } = {}) => {
  return new Promise((resolve, reject) => wx.request({
    method,
    data,
    timeout: 30000,
    success: (res) => {
      if (res.data.ret === 0) {
        resolve(res.data);
        return;
      };
      handleErr(res.data.msg);
      reject(res.data.msg);
    },
    fail: (res) => {
      handleErr(res.errMsg);
      reject(res.errMsg);
    },
    url: `${host}${url}`
  }));
};

const requestP = ({ data, url, method = 'POST' } = {}) => {
  return new Promise((resolve, reject) => wx.request({
    method,
    data,
    timeout: 30000,
    success: (res) => {
      if (res.data.code === 0) {
        resolve(res.data.data);
        return;
      };
      handleErr(res.data.msg);
      reject(res.data.msg);
    },
    fail: (res) => {
      handleErr(res.errMsg);
      reject(res.errMsg);
    },
    url: `${pHost}${url}`
  }));
};

const api = {
  getOpenId: (data = {}) => {
    return request({
      url: `/user/openid/${data.code}`,
      method: 'GET',
    });
  },
  getScore: (data = {}) => {
    return request({
      url: `/user/${data.openid}`,
      method: 'GET',
    });
  },
  getAddress: (data = {}) => {
    return request({
      url: `/user/address/${data.addressId}`,
      method: 'GET',
    });
  },  
  getAllAddress: (data = {}) => {
    return request({
      url: `/user/addressList/${data.openid}`,
      method: 'GET',
    });
  },  
  newAddress: (data = {}) => {
    return request({
      data,
      url: `/user/address/${data.openid}`,
      method: 'POST',
    });
  },
  setAddress: (data = {}) => {
    return request({
      data,
      url: `/user/address/${data.openid}`,
      method: 'PUT',
    });
  },
  setDefaultAddress: (data = {}) => {
    return request({
      data,
      url: `/user/defaultAddress/${data.openid}/${data.addressId}`,
      method: 'PUT',
    });
  },
  getDefaultAddress: (data = {}) => {
    return request({
      url: `/user/defaultAddress/${data.openid}`,
      method: 'GET',
    });
  },
  getGoods: (data = {}) => {
    return request({
      url: `/commodity/sale/${data.page_index}/${data.page_size}`,
      method: 'GET',
    });
  },
  getGoodsItem: (data = {}) => {
    return request({
      url: `/commodity/${data.id}`,
      method: 'GET',
    });
  },
  getScoreHistory: (data = {}) => {
    return request({
      url: `/user/scoreChange/${data.openid}`,
      method: 'GET',
    });
  },
  createOrder: (data = {}) => {
    return request({
      url: `/order/${data.openid}/${data.addressId}/${data.commodityId}`,
      method: 'POST',
    });
  },
  getOrderList: (data = {}) => {
    return request({
      url: `/user/order/${data.openid}`,
      method: 'GET',
    });
  },
  commitVideo: (data = {}) => {
    return requestP({
      data,
      url: `/test/reg`,
      method: 'POST',
    });
  },
};

export default api;