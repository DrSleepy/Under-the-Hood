<template>
  <section class="block">

    <label class="block__header">
      <h2> {{ title }}</h2>
      <input class="block__checkbox" type="checkbox" v-model="show">
      <i class="fas fa-chevron-down header__label"></i>
    </label>

    <main class="block__content" v-if="show">
      <slot></slot>
    </main>

  </section>
</template>

<script lang="ts">
export default {
  props: {
    title: String
  },
  data() {
    return {
      show: true
    };
  }
};
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
