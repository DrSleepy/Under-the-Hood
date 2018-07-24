<template>
  <div class="content__section">

    <p class="content__text"> An execution context is a wrapper made by the JavaScript engine that wraps around the currently executing code (such as a function). This is created before any of the code is ran. </p>

    <p class="content__text">
      <span class="bold">Each function gets its own execution context whereas objects do not</span>. As they are created, they are placed onto the exectuion stack, then removed once the last line within the function is ran.</p>

    <p class="content__text">There are two phases to an execution context: </p>
    <h3 class="content__subheading"> Phase 1 - Creation </h3>
    <p class="content__text">
      <ul>
        <li>
          1. Sets up the variables and functions in memory, hoisting them. These are scoped to the execution context.
        </li>
        <li>
          2. The context of 'This' is set up.
        </li>
        <li>
          3. The outer environment of the context execution being created is set up.
        </li>
        <li>
          4. The global object is set up.
        </li>
      </ul>
    </p>

    <p class="content__text"> There is always a base execution context. This is known as the global execution context. It is available from anywhere to everything.</p>

    <h3 class="content__subheading"> Phase 2 - Execution </h3>
    <p class="content__text"> The second phase simply runs the code inside the wrapper line by line. </p>

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
