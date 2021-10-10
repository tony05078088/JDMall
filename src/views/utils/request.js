import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/',
  timeout: 20000
});

// 封裝一個post方法
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
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

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
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
