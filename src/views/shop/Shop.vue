<template>
  <div class="wrapper">
    <ShopInfo :shopInfo="item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo.vue';
export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup () {
    const item = {
      _id: '1',
      name: 'wall-street',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 1000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: '123456'
    };
    return { item };
  }
};
</script>

<style scoped>
.wrapper {
  padding: 0 0.18rem;
}
</style>
