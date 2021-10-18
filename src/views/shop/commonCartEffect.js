import { toRefs } from 'vue';
import { useStore } from 'vuex';
export const useCommonCartEffect = () => {
  const store = useStore();
  const { cartList } = toRefs(store.state);
  const changeCartItemInfo = (shopId, productID, productInfo, way) => {
    store.commit('changeCartItemInfo', { shopId, productID, productInfo, way });
  };

  return { cartList, changeCartItemInfo };
};
