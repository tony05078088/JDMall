<template>
  <div class="docker">
    <span
      v-for="(list, index) in dockerList"
      :key="list.icon"
      :class="{ 'docker__item': true, 'docker__item--active': index === 0 }"
      >{{ list.text }}
      <i :class="list.icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: 'twicon-td-flag',
        text: '首頁'
      },
      {
        icon: 'twicon-gate-cks',
        text: '購物車'
      },
      {
        icon: 'twicon-youbike',
        text: '訂單'
      },
      {
        icon: 'twicon-tea-pot',
        text: '我的'
      }
    ];
    return {
      dockerList
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  color: $content-fontcolor;
  border-top: 0.01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4fc;
    }
  }
  i {
    font-size: 0.35rem;
    display: block;
    margin: 0.02rem 0 0.02rem 0;
  }
}
</style>
