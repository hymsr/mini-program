const doNothing = () => {};

const withBasicData = (data = {}) => {
  data.user = '';
  return;
};

const request = ({success = doNothing, fail = doNothing, data, url, method = 'POST'} = {}) => {
  withBasicData(data);
	
  return wx.request({
    url,
    method,
    data,
    success,
    fail,
  });
};

const api = {
};

export default api;