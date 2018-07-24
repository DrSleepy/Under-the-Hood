<template>
  <div class="content__section">

    <p class="content__text"> 'Use strict' is a string that is like a built-in linter. It makes sure a variable is delcared being attempting to use it. </p>

    <h3 class="content__subheading"> Placement </h3>
    <p class="content__text"> It may be placed at the top of a file so that it execute globally or within a function so that it may exection within a certain section. </p>

    <p class="content__text"> Global Placement: </p>
    <pre v-highlightjs>
      <code class="javascript" id="code">
      "use strict";
      function sayMyName() {
          name = 'heisenberg';   // error: name is not declared 
      }
      sayMyName();
      </code>
    </pre>

    <p class="content__text"> Functional Placement: </p>
    <pre v-highlightjs>
      <code class="javascript" id="code">
      profession = 'Science teacher'; // no error because 'use strict' is not global
      function sayMyName() {
      "use strict";
          name = 'heisenberg';   // error: name is not declared 
      }
      sayMyName();
      </code>
    </pre>

    <p class="content__text"> It is important to note that each JavaScript engine interpretes the rules of "use strict" different so it is not always fully reliable to depend on. </p>

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
