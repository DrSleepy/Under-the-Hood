<template>
  <div class="root">

    <header class="root__header">
      <p class="slogan"> Under the Hood </p>
      <h1 class="language"> JavaScript </h1>
    </header>

    <div class="root__search">
      <input class="search__input" type="text" placeholder="Search...">
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
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
.root__header {
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
.root__search {
  .pad-3;
  background-color: @primary-theme-color;
}
.search__input {
  .pad-2--5;
  width: 100%;
  border-radius: 2px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.15);
}

::placeholder {
  .micro;
  color: #4a6680;
  opacity: 0.4;
  font-family: 'main-font-normal';
}
</style>
