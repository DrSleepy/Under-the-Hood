<template>
  <section class="block">

    <header class="block__header">
      <h2> Execution Context </h2>
      <input id="header__checkbox" class="header__checkbox" type="checkbox" v-model="show">
      <label class="fas fa-chevron-down header__label" for="header__checkbox"></label>
    </header>

    <main class="block__content" v-if="show">
      <div class="content__section">
        <h3 class="content__subheading"> Definition: </h3>
        <p class="content__text"> This is when something bad happens like lorem I posum to be honest i don't even know the meaning that these people say they do when. Truely the legitemate are simple this is when something bad happens like know the. </p>
      </div>

      <div class="content__section">
        <h3 class="content__subheading"> Example: </h3>
        <p class="content__text"> This is when something bad happens like lorem I posum to be honest i don't even know the meaning that these people sayn. Truens like lorem I posum to be d happens like lorem I posum to be honest i don't even know the meaning that these people sayn. Truely the legitemate are honest i don't even know the meaning. </p>
      </div>

      <div class="content__section">
        <h3 class="content__subheading"> Result: </h3>
        <p class="content__text"> This is when something bad happens like lorem I posum to be honest i don't even know the meaning that these people sayn. Truens like lorem I posum to be d happens like lorem I posum to be honest i don't even know the meaning that these people sayn. Truely the legitemate are honest i don't even know the meaning. </p>
      </div>
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
  .box-shadow-1;
  .push-down-3;
  background-color: #fff;

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
    .milli;
    font-family: 'Roboto';
    color: @light-black-text-color;
  }
}

.header {
  &__checkbox {
    @speed: 200ms;
    display: none;

    &:checked + .header__label {
      transition: @speed;
      transform: rotate(180deg);
    }
    &:not(:checked) + .header__label {
      transition: @speed;
    }
  }
}

.content {
  &__section {
    .push-down-5;
  }
  &__subheading {
    .push-down-2;
    color: @subheading-text-color;
  }
  &__text {
    line-height: @size-4--5;
  }
}
</style>
