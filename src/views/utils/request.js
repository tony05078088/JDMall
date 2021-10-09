import axios from 'axios';

// 封裝一個post方法
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL:
          'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        res => {
          // 成功時把res通過promise帶出去
          resolve(res.data);
        },
        err => {
          reject(err);
        }
      );
  });
};
