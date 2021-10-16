<template>
  <div class="cart">
    <div class="check">
      <div class="bag">
        <img
          class="bag__img"
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
        />
        <div class="pointer">
          1
        </div>
      </div>
      <div class="check_info">
        總計: <span class="check__info__price">&yen;666</span>
      </div>
      <div class="check__btn">
        去結算
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '../../style/variables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
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
      right: .2rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background: $hightlight-fontColor;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
       color:$bgColor;
      transform:scale(.75) ;
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
