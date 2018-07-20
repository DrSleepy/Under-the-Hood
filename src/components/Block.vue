<template>
  <section class="block">

    <header class="block__header">
      <h2> Execution Context </h2>
      <i class="fas fa-chevron-down"></i>
    </header>

    <main class="block__content">
      <h3 class="content__subheading"> Definition </h3>
      <p class="content__text"> This is when something bad happens like lorem I posum to be honest i don't even know the meaning that these people say they do when. Truely the legitemate are simple this is when something bad happens like know the. </p>
    </main>

  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import (reference) '../styles/index.less';

.block {
  .box-shadow-1;
  .push-down-3;
  background-color: #fff;
  height: 300px;

  &__header,
  &__content {
    .pad-4;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    font-family: 'main-font-medium';
    border-bottom: solid 1px #e7eeef;
  }

  &__content {
    .micro;
    font-family: 'Roboto';
    color: @light-black-text-color;
  }
}

.content {
  &__subheading {
    .micro;
    .push-down-2;
    color: @subheading-text-color;
  }
  &__text {
    line-height: @size-4--5;
  }
}
</style>
