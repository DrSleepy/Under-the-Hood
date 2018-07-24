<template>
  <div class="content__section">

    <h3 class="content__subheading"> __proto__ </h3>
    <p class="content__text"> __proto__ is the default prototype of all objects in JavaScript. __proto__ is what allows the use of String.spit, Array.forEach and all other default function. Both 'split' and 'forEach' functions live on the __proto__. </p>

    <p class="content__text">
      <span class="bold">__proto__ should never be changed.</span>
      <br> Use prototype instead to add additional features to an object. </p>

    <h3 class="content__subheading"> Prototype </h3>
    <p class="content__text"> Unlike __proto__, Prototype is undefined by default. It is there for the developer to add additional properties and functions to share between objects. Prototype is like a class in Java or C#. </p>

  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="less" scoped>
@import (reference) '../styles/index.less';

#code {
  .code;
}

.content__section {
  .content__section;
}

.content__subheading {
  .content__subheading;
}

.content__text {
  .content__text;
}

.bold {
  .bold;
}
</style>
