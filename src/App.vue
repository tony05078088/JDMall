<template>
  <div id="nav">
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

<style lang="scss" scoped>
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4fc;
    }
  }
}
i {
  font-size: 0.35rem;
  display: block;
  margin: 0.02rem 0 0.02rem 0;
}
</style>
