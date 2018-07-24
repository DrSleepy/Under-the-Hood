<template>
  <div class="content__section">

    <p class="content__text"> An immediately invoked function expression (IIFE) is a function expression that is immediately invoked using parentheses after the closing brace of the expression. </p>

    <h3 class="content__subheading"> Anonymous Function Expressions </h3>
    <p class="content__text"> The JavaScript engine does not allow anonymous function statements. This is because when a new line starts with the word 'function', the engine expects the following word to be a name (of the function). The easiest and most common solution (which is also used by jQuery) to avoid erroring is to wrap the
      <span class="bold">entire</span> anonymous function in parentheses. There are two ways to invoke such a wrapped function. Invoke the function either with the parentheses inside the wrapping parentheses or outside. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      (function(param1, param2){
        console.log('inside IIFE')
      }(param1, param2))

      console.log('outside IIFE')

      // output:
      // Inside IIFE
      // outside IIFE
      </code>
    </pre>

    <p class="content__text"> Many libraries wrap their code in IIFEs to created their own execution context. This removes the risk of overwriting variables or functions as each execution context creates its own variable environment.</p>

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
