<template>
  <div class="root">

    <header class="header">
      <p class="slogan"> Under the Hood </p>
      <h1 class="language"> JavaScript </h1>
    </header>

    <Block :title="'Bind, Call & Apply'">
      <BindCallApply/>
    </Block>

    <Block :title="'Execution Context'">
      <ExecutionContext/>
    </Block>

  </div>
</template>

<script lang="ts">
import Block from './components/Block.vue';
import BindCallApply from './components/BindCallApply.vue';
import ExecutionContext from './components/ExecutionContext.vue';

export default {
  components: {
    Block,
    BindCallApply,
    ExecutionContext
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
// Global styles
@import './styles/reset.less';
@import './styles/base.less';
</style>

<style lang="less" scoped>
// Scoped styles
@import (reference) './styles/index.less';

.root {
  height: 100%;
  color: @black-text-color;
  font-family: 'main-font-normal';
}

// Header Text
.header {
  .pad-3;
  background-color: @primary-theme-color;
}
.slogan {
  .mega;
  color: white;
}
.language {
  .yotta;
  font-family: 'main-font-medium';
}
</style>
