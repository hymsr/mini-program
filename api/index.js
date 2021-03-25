const doNothing = () => { };

// const withBasicData = (data = {}) => {
//   data.user = '';
//   return;
// };

const host = 'http://www.liiux.cn:8080';

const request = ({ success = doNothing, fail = doNothing, complete, data, url, method = 'POST' } = {}) => {
  // withBasicData(data);
  const commonFail = (res) => {
    wx.showModal({
      title: '提示',
      content: res.data.msg,
      showCancel: false,
      complete: fail(res.data),
    });
  };

  return wx.request({
    method,
    data,
    complete,
    success: (res) => {
      if (res.data.ret === 0) {
        success(res.data);
        return;
      };
      fail(res.data);
    },
    fail: commonFail,
    url: `${host}${url}`
  });
};

const api = {
  getOpenId: ({ complete, success, fail, data } = {}) => {
    return request({
      url: `/user/openid/${data.code}`,
      method: 'GET',
      success,
      fail,
      complete,
    });
  },
};

export default api;