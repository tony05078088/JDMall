<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back" @click="handleBack">
        <i class="twicon-green-man"></i>
      </div>
      <div class="search__content">
        <span class="search__content__icon">
          <i class="twicon-apple-cider"></i>
        </span>
        <input class="search__content__input" placeholder="請輸入搜尋物品" />
      </div>
    </div>
    <ShopInfo
      :shopInfo="data.item"
      :hideBorder="true"
      v-if="data.item.imgUrl"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { get } from '../utils/request';
import ShopInfo from '../../components/ShopInfo.vue';

const useShopInfoEffect = () => {
  const data = reactive({ item: {} });
  const route = useRoute();
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  return { data, getItemData };
};

export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup () {
    // router指的是整個route的訊息 route是指當前路由的訊息
    const router = useRouter();
    const { getItemData, data } = useShopInfoEffect();
    const handleBack = () => {
      router.back();
    };
    getItemData();
    return { data, handleBack, getItemData };
  }
};
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  line-height: 0.12rem;
  margin: 0.14rem 0 0.04rem 0;
  &__back {
    width: 0.3rem;
    height: 0.32rem;
    i {
      font-size: 0.32rem;
      width: 0.24rem;
      display: inline-block;
    }
  }
  &__content {
    flex: 1;
    display: flex;
    background: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
      i {
        font-size: 0.32rem;
        width: 0.24rem;
      }
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      color: #333333;
      font-size: 0.14rem;
      &::placeholder {
        color: #333333;
      }
    }
  }
}
</style>
