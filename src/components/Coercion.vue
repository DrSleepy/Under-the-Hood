<template>
  <div class="content__section">

    <p class="content__text"> Coercion simply means to convert a value from one type to another. </p>

    <h3 class="content__subheading"> Number vs String </h3>
    <p class="content__text"> The JavaScript engine coerces types when attempting add a string to a number. Rather than erroring (like other languages), it will coerce the number to a string before combining it into one string.</p>

    <p class="content__text"> However, the opposite is the case when taking away a number wrapped as string from a primitive number. The string will in fact be coerced to a number before proceeding with the calculation</p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      Number + String: 6 + '8'; //output: '68'
      Number - String: 5 - '1'; //output: 4
      </code>
    </pre>

    <h3 class="content__subheading"> Number vs Boolean </h3>
    <p class="content__text"> If you're coming from another language, you would expect an error to be thrown when adding a boolean to a number. This is not the case with JavaScript due to booleans also being coerced.</p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      Number + Boolean: 5 + true; //output: 6
      Number - Boolean: 5 - true; //output: 4

      // Reason
      true == 1; //output: true
      false == 0; //output: true
      </code>
    </pre>

    <p class="content__text">As you may expect, true equals 1 and false equals 0.</p>
    <h3 class="content__subheading"> Solution ( use '===' ) </h3>
    <p class="content__text"> This behavior may sometimes be what you need. In the many cases it is not, the solution would be to use '===' to prevent type coercion. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      true === 1; //output: false
      false === 0; //output: false
      </code>
    </pre>

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
