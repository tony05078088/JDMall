<template>
  <div class="cart">
    <div class="product">
      <template v-for="item in productLists" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yun">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="
                () => {
                  changeCartItemInfo(shopid, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ cartList?.[Shopid]?.[item._id]?.count }}
            <span
              class="product__number__plus"
              @click="
                () => {
                  changeCartItemInfo(Shopid, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="bag">
        <img
          class="bag__img"
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
        />
        <div class="pointer">
          {{ TotalCount }}
        </div>
      </div>
      <div class="check_info">
        總計: <span class="check__info__price">&yen;{{ Totalprice }}</span>
      </div>
      <div class="check__btn">
        去結算
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { useCommonCartEffect } from './commonCartEffect';

const useCartEffect = Shopid => {
  const store = useStore();
  const cartList = store.state.cartList;
  const TotalCount = computed(() => {
    const productlist = cartList[Shopid];
    let count = 0;
    if (productlist) {
      for (const i in productlist) {
        const productCount = productlist[i].count;
        count += productCount;
      }
    }
    return count;
  });
  const Totalprice = computed(() => {
    const productlist = cartList[Shopid];
    let price = 0;
    if (productlist) {
      for (const i in productlist) {
        const productPrice = productlist[i].count * productlist[i].price;
        price += productPrice;
      }
    }
    return price.toFixed(2);
  });

  const productLists = computed(() => {
    const productlist = cartList[Shopid] || [];
    return productlist;
  });

  return { Totalprice, TotalCount, productLists, cartList };
};

export default {
  name: 'Cart',
  setup () {
    const route = useRoute();
    const Shopid = route.params.id;
    const { changeCartItemInfo } = useCommonCartEffect();
    const { Totalprice, TotalCount, productLists, cartList } = useCartEffect(
      Shopid
    );
    return {
      TotalCount,
      Totalprice,
      productLists,
      cartList,
      Shopid,
      changeCartItemInfo
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../style/variables.scss';
@import '../../style/mixins.scss';

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  flex: 1;
  overflow-y: scroll;
  background: #fff;
  &__item {
    position: relative;
    padding: 0.12rem;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    display: flex;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
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
    &__price {
      margin: 0.06rem 0 0 0;
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

.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  .bag {
    position: relative;
    width: 0.84rem;
    box-sizing: border-box;
    padding: 0.11rem 0.32rem 0.12rem 0.24rem;
    &__img {
      display: block;
      margin: 0 auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    .pointer {
      position: absolute;
      top: 0.04rem;
      left: 0.4rem;
      min-width: 0.2rem;
      padding: 0 0.04rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background: $hightlight-fontColor;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: $bgColor;
      transform: scale(0.75);
      transform-origin: left center;
    }
  }
  .check_info {
    width: 1.93rem;
    height: 0.17rem;
    font-size: 0.12rem;
    text-align: center;
    margin: 0.16rem 0;
    color: $content-fontcolor;
    .check__info__price {
      width: 0.4rem;
      height: 0.25rem;
      margin: 0.12rem 0;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  .check__btn {
    display: inline-block;
    width: 0.98rem;
    padding: 0.14rem 0.28rem;
    height: 0.49rem;
    background: #4fb0f9;
    text-align: center;
    color: $bgColor;
  }
}
</style>
