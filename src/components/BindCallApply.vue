<template>
  <div class="content__section">
    <p class="content__text"> Bind, Call and Apply are all functions that live on the prototype of an function. All three functions allow you to change the context of the 'this' keyword by passing context as the first parameter. </p>

    <h3 class="content__subheading"> Call & Apply </h3>
    <p class="content__text">Call and Apply work in the exact same way with one difference. Call accepts parameters separated by commas whereas Apply only accepts an array of parameters as its second arguement. Both functions (Call and Apply) also immediately execute the functions they are used on.</p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
        //Example Code Here
        const s = new Date().toString(); 
        const name = "my name is bob";
      </code>
    </pre>

    <h3 class="content__subheading"> Bind </h3>
    <p class="content__text">Bind works differently than the other two. Bind create a copy of the function it is used on. The copied function will be returned. Bind changes the context of the 'this' keyword just the same as Call and Apply but any other parameters given to it will be set as a permanent value of the function it copied.</p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
        //Example Code Here
        const s = new Date().toString(); 
        const name = "my name is bob";
      </code>
    </pre>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BindCallApply extends Vue {}
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
</style>
