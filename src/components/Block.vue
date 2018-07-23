<template>
  <section class="block">

    <header class="block__header">
      <h2> Bind, Call & Apply </h2>
      <input id="header__checkbox" class="header__checkbox" type="checkbox" v-model="show">
      <label class="fas fa-chevron-down header__label" for="header__checkbox"></label>
    </header>

    <main class="block__content" v-if="show">
      <slot></slot>
    </main>

  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Block extends Vue {
  protected show: boolean = false;
}
</script>

<style lang="less" scoped>
@import (reference) '../styles/index.less';

.block {
  .block;
}

.block__header {
  .block__header;
}

.block__content {
  .block__content;
}

.header__checkbox {
  .header__checkbox;
}
.header__checkbox:checked + .header__label {
  transition: 200ms;
  transform: rotate(180deg);
}
.header__checkbox:not(:checked) + .header__label {
  transition: 200ms;
}
</style>
