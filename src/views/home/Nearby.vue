<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店鋪</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img
        class="nearby__item__img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="tag in item.tags"
            :key="tag"
            >{{ tag }}</span
          >
        </div>
        <p class="nearby__content__hightlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        id: 1,
        title: '沃爾瑪',
        tags: ['月售一萬+', '低消百元', '基礎運費$60'],
        desc: '滿66元折6元運費券'
      },
      {
        id: 2,
        title: '沃爾瑪',
        tags: ['月售一萬+', '低消百元', '基礎運費$60'],
        desc: '滿66元折6元運費券'
      },
      {
        id: 3,
        title: '沃爾瑪',
        tags: ['月售一萬+', '低消百元', '基礎運費$60'],
        desc: '滿66元折6元運費券'
      }
    ];
    return { nearbyList };
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
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
