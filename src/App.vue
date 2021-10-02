<template>
  <div id="nav">
    <div class="wrapper">
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
      <div class="nearby">
        <h3 class="nearby__title">附近店鋪</h3>
        <div class="nearby__item">
        <img
         class="nearby__item__img"
         src="http://www.dell-lee.com/imgs/vue3/near.png">
         <div class="nearby__content">
              <div class="nearby__content__title">沃爾瑪</div>
              <div class="nearby__content__tags">
               <span class="nearby__content__tag">月售一萬</span>
               <span class="nearby__content__tag">月售一萬</span>
               <span class="nearby__content__tag">月售一萬</span>
              </div>
              <p class="nearby__content__hightlight">滿66元折6元運費券</p>
         </div>
        </div>
      </div>
    </div>
    <div class="docker">
      <span class="docker__item docker__item--active">
        首頁
        <i class="twicon-td-flag"></i>
      </span>
      <span class="docker__item"
        >購物車
        <i class="twicon-gate-cks"></i>
      </span>
      <span class="docker__item">
        訂單
        <i class="twicon-youbike"></i>
      </span>
      <span class="docker__item"
        >我的
        <i class="twicon-tea-pot"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
@import "./style/variables.scss";
@import "./style/mixins.scss";
.wrapper {
  overflow-y:auto;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
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
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color:$content-fontcolor;
  }
  &__item {
    display:flex;
    padding-top:.12rem ;
    &__img {
      margin-right: .16rem;
      width:.56rem;
      height: .56rem;
    }
  }
  &__content {
    flex:1;
    padding-bottom: .12rem;
      border-bottom:1px solid  $content-bgColor;  ;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color:$content-fontcolor;
    }
    &__tags {
      margin-top:.08rem;
      line-height: .18rem;
      font-size: .13rem;
    }
       &__tag {
        margin-right: .16rem;
      }
     &__hightlight {
         line-height: .18rem;
      font-size: .13rem;
       color:#E93B3B;
       margin:.08rem 0 0 0;
     }
  }
}
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
