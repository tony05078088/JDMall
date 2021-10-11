<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">秒殺</div>
      <div class="category__item">新鮮水果</div>
      <div class="category__item">休閒食品</div>
      <div class="category__item">時令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item" >
        <img
          class="product__item__img"
          src="http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g</h4>
          <p class="product__item__sales">月銷售10件</p>
          <p class="product__item__price">
            <span class="product__item__yun">&yen;</span>33.6
            <span class="product__item__origin">&yen;66</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  background: #f5f5f5;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
    &--active {
      background: #fff;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &__item {
    padding: 0.12rem;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    display: flex;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      margin: 0;
    }
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: #333;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &__yun {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
  }
}
</style>
