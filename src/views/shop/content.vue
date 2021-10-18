<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': category.tab === currentTab ? true : false
        }"
        @click="handleTab(category.tab)"
        v-for="category in categories"
        :key="category.name"
      >
        {{ category.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月銷售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yun">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="
              () => {
                changeCartItemInfo(shopId, item._id, item, -1);
              }
            "
            >-</span
          >
          {{ cartList?.[shopId]?.[item._id]?.count }}
          <span
            class="product__number__plus"
            @click="
              () => {
                changeCartItemInfo(shopId, item._id, item, 1);
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { get } from '../utils/request';
import { useCommonCartEffect } from './commonCartEffect';

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒殺', tab: 'seckill' },
  { name: '新鮮水果', tab: 'fruit' }
];

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTab = item => {
    currentTab.value = item;
  };
  return { currentTab, handleTab };
};

const useCurrentListEffect = currentTab => {
  const route = useRoute();
  const content = reactive({
    list: []
  });
  const getContentData = async () => {
    const result = await get(`/api/shop/${route.params.id}/products`, {
      tab: currentTab.value
    });
    if (result?.data?.length && result?.errno === 0) {
      content.list = result.data;
    }
  };
  watchEffect(() => {
    getContentData();
  });
  const { list } = toRefs(content);
  return { list };
};

export default {
  name: 'Content',
  setup () {
    const route = useRoute();
    const shopId = route.params.id;
    const { currentTab, handleTab } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab);
    const { cartList, changeCartItemInfo } = useCommonCartEffect();
    return {
      list,
      currentTab,
      categories,
      handleTab,
      cartList,
      shopId,
      changeCartItemInfo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  width: 0.76rem;
  height: 100%;
  overflow-y: scroll;
  background: $search-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    color: $content-fontcolor;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &__item {
    position: relative;
    padding: 0.12rem;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    display: flex;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      margin: 0;
      @include ellipse;
    }
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yun {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
  }
  .product__number {
    position: absolute;
    right: 0;
    bottom: 0.12rem;
    &__minus,
    &__plus {
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.16rem;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      font-size: 0.2rem;
    }
    &__minus {
      border: 0.01rem solid $medium-fontColor;
      color: $medium-fontColor;
      margin-right: 0.05rem;
    }
    &__plus {
      background: $btn-bgColor;
      color: $bgColor;
      margin-left: 0.05rem;
    }
  }
}
</style>
