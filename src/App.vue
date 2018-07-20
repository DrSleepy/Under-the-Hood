<template>
  <div class="root">

    <header class="header">
      <p class="slogan"> Under the Hood </p>
      <h1 class="language"> JavaScript </h1>
    </header>

    <div class="search">
      <input class="search__input" type="text" placeholder="Search...">
    </div>

    <Block/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Block from './components/Block.vue';

@Component({
  components: {
    Block
  }
})
export default class App extends Vue {}
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

//  Search Bar
.search {
  .pad-3;
  background-color: @primary-theme-color;
}
.search__input {
  .pad-2--5;
  .box-shadow-1;
  width: 100%;
  border-radius: 2px;
  border: none;
}

::placeholder {
  .micro;
  color: #4a6680;
  opacity: 0.4;
  font-family: 'main-font-normal';
}
</style>
