<template>
  <div class="content__section">

    <h3 class="content__subheading"> Precedence </h3>
    <p class="content__text"> Precedence means which mathematical operator to run first (e.g. multiply take priority over addition). </p>

    <h3 class="content__subheading"> Associativity </h3>
    <p class="content__text"> Associativity means which direction the equation is read. Left-to-right or right-to-left. </p>

    <br>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank" class="content__text link bold"> List of operator precedence - MDN Source </a>

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

.link {
  text-decoration: none;
  color: rgba(58, 207, 195, 0.849);
}

.link:hover {
  text-decoration: none;
  color: rgba(46, 179, 167, 0.877);
}
</style>
