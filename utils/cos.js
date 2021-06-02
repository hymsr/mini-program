import COS from './coslib';

const cos = new COS({
  SecretId: 'AKID3sSpSqx592MSLLJ6lAKFuFMG3d08lhfP',
  SecretKey: 'eEcnskON6fEXcEcnqeDl4A2fJp7A0byW',
});

const opera = {
  upload: (filePath, filename) => {
    return new Promise((resolve, reject) => {
      cos.postObject({
        Bucket: 'asset-1302726404', /* 必须 */
        Region: 'ap-guangzhou',    /* 必须 */
        Key: `user/${filename}`,              /* 必须 */
        FilePath: filePath,
        onProgress: function (info) {
          console.log(JSON.stringify(info));
        },
      }, function(err, data) {
        if (err) reject(err);
        resolve(data); 
      });
    })
  }
};

export default opera;