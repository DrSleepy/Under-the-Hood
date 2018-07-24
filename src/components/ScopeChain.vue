<template>
  <div class="content__section">

    <p class="content__text"> Scope chain is a link of exection contexts until the last (global) execution context is reached. However, the link down does
      <span class="bold">NOT</span> connect each execution context in the execution stack from top to bottom. Some execution contexts may be skipped depending on the lexical placement of the function the execution context was created for. </p>

    <p class="content__text">If the JavaScript engine cannot find a variable inside a function, it will then proceed to scope down the chain to until the variable is found. The next execution context it checks in for the variable is in its outer environment, which is the
      <span class="bold">next nearest execution context.</span>
    </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      // ===== Global Execution Context =====

      // Execution Context - A
      function A(){
        const name = 'Hodor';
        B();
      }

      // Execution Context - B
      function B(){ 
        console.log(name)
      }

      const name = 'Chad';
      A();

      // output: Chad
      </code>
    </pre>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      // How the execution stack looks given the code above (1 being the bottom of the stack)

      // 3. Execution Context - B
      // 2. Execution Context - A
      // 1. Global Execution Context

      </code>
    </pre>

    <p class="content__text">Even though A is the closest execution context to B
      <span class="bold">on the stack</span>, the next nearest outer environment for B is on the global execution context. This is because function B
      <span class="bold">physically</span>, function B sits lexically on the global scope. If Function B was nested inside function A, then function A would be function B's next scope on the scope chain.</p>

    <p class="content__text">The outter environment is
      <span class="bold">where</span> the current execution context (or function) physically sits in the code.</p>

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
