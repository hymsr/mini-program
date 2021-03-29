const doNothing = () => { };

// const withBasicData = (data = {}) => {
//   data.user = '';
//   return;
// };

const host = 'http://www.liiux.cn:8080';

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
    success: (res) => {
      if (res.data.ret === 0) {
        resolve(res.data);
        return;
      };
      console.log(res)
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

const api = {
  getOpenId: (data = {}) => {
    return request({
      url: `/user/openid/${data.code}`,
      method: 'GET',
    });
  },
  getAllAddress: (data = {}) => {
    return request({
      url: `/user/addressList/${data.openid}`,
      method: 'GET',
    });
  },  
};

export default api;