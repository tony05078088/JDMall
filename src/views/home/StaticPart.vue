<template>
      <div class="position">
        <span class="position__left">
          <i class="twicon-beer"></i>
        </span>
        國立中央大學志道樓10層
        <span class="position_right">
          <i class="twicon-tapioca"></i>
        </span>
      </div>
      <div class="search">
        <i class="twicon-couplets"></i>
        <span class="search__text">
          酷炫會員商店優惠商品
        </span>
      </div>
      <div class="banner">
        <img
          class="banner__img"
          src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        />
      </div>
      <div class="icons">
        <div v-for="icon in icons" :key="icon" class="icons__item">
          <img :src="icon.imgsSrc" class="icons__item__img" />
          <p class="icons__item__desc">{{ icon.title }}</p>
        </div>
      </div>
      <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  data () {
    return {
      icons: [
        {
          title: '超市便利',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/超市.png']
        },
        {
          title: '菜市場',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/菜市场.png']
        },
        {
          title: '水果店',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/水果店.png']
        },
        {
          title: '鮮花綠植',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/鲜花.png']
        },
        {
          title: '医药健康',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/医药健康.png']
        },
        {
          title: '家居時尚',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/家居.png']
        },
        {
          title: '烘焙蛋糕',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/蛋糕.png']
        },
        {
          title: '签到',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/签到.png']
        },
        {
          title: '红包套餐',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/红包.png']
        },
        {
          title: '大牌免运',
          imgsSrc: ['http://www.dell-lee.com/imgs/vue3/大牌免运.png']
        }
      ]
    };
  }

}
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/mixins.scss";
.position {
  padding: 0.16rem 0;
  background: chartreuse;
  line-height: 0.22rem;
  font-size: 0.16rem;
  text-align: center;
  color: $content-fontcolor;
  //防止內容過多造成換行,此效果可達成多字省略
  @include ellipse;
  &__left {
    position: relative;
    top: 0.01rem;
  }
  i {
    font-size: 0.3rem;
    display: inline-block;
    margin-right: 0.05rem;
  }
}
.search {
  vertical-align: middle;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  margin-bottom: 0.12rem;
  i {
    position: relative;
    top: 0.06rem;
    padding: 0 0.12rem 0 0.16rem;
    font-size: 0.3rem;
    display: inline-block;
    margin-right: 0.05rem;
  }
  &__text {
    display: inline-block;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  //螢幕寬度的25.4%
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  margin-top: .16rem;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color:$content-fontcolor;
    }
  }
}
.gap {
  height:.1rem;
  background: $content-bgColor;
  margin: 0 -.18rem
}
</style>
