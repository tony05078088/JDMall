<template>
  <div id="nav">
    <div class="wrapper">
      <StaticPart />
       <Nearby />
    </div>
    <Docker />
  </div>
</template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  components: {
    StaticPart,
    Nearby,
    Docker
  }
};
</script>

<style lang="scss" scoped>
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

</style>
