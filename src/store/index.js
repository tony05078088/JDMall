import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: {
      // 第一層級是商鋪的id
      2: {
        // 第二層級是商品id
        // 第二層內容是商品內容及購物數量
        1: {
          _id: '1',
          name: '番茄一份兩百五',
          imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
          sales: 10,
          price: 33.6,
          oldPrice: 39.6,
          count: 2
        }
      }
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productID, productInfo, way } = payload;
      let shopInfo = state.cartList[shopId];
      if (!shopInfo) {
        shopInfo = {};
      }
      let product = shopInfo[productID];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      product.count += way;
      if (product.count < 0) {
        product.count = 0;
      }
      shopInfo[productID] = product;
      state.cartList[shopId] = shopInfo;
    }
  },
  actions: {},
  modules: {}
});
