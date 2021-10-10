<template>
  <div class="shop">
    <img class="shop__item__img" :src="shopInfo.imgUrl" />
    <div
      :class="{
        shop__content: true,
        'shop__content--border': hideBorder ? false : true
      }"
    >
      <div class="shop__content__title">{{ shopInfo.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月銷量: {{ shopInfo.sales }}</span>
        <span class="shop__content__tag"
          >起送: {{ shopInfo.expressLimit }}</span
        >
        <span class="shop__content__tag"
          >基本運費: {{ shopInfo.expressPrice }}</span
        >
      </div>
      <p class="shop__content__hightlight">{{ shopInfo.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['shopInfo', 'hideBorder']
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__item__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
      border-bottom: 1px solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__hightlight {
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>
