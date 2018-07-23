<template>
  <section class="block">

    <label class="block__header" for="block__checkbox">
      <h2> {{ title }}</h2>
      <input id="block__checkbox" class="block__checkbox" type="checkbox" v-model="show">
      <i class="fas fa-chevron-down header__label"></i>
    </label>

    <main class="block__content" v-if="show">
      <slot></slot>
    </main>

  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Block extends Vue {
  @Prop() protected title: string;

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

.block__checkbox {
  .block__checkbox;
}
.block__checkbox:checked + .header__label {
  transition: 200ms;
  transform: rotate(180deg);
}
.block__checkbox:not(:checked) + .header__label {
  transition: 200ms;
}
</style>
