<template>
  <div class="content__section">

    <ul>
      <li>
        1. Each object is saved in its own slot in memory.
      </li>
      <li>
        2. Each property of an object also takes up its own slot in memory.
      </li>
      <li>
        3. Objects reference their properies by the property's address in memory.
      </li>
    </ul>

    <h3 class="content__subheading"> Performance & Prototype </h3>
    <p class="content__text"> Knowing these three points, try to reuse objects whenever given the opportunity along side making use of the 'prototype' of an object as much as possible since there can be multiple objects but only one prototype. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      const User = { 
        username: '',
        password: '',
        userDetails :  function(){
        console.log(this.username, this.password);
        }
      }

      const customer = Object.create(User);
      customer.username = 'fortnite';
      customer.password = 'hunter123';

      customer.userDetails(); // output: fortnite hunter123
      </code>
    </pre>

    <p class="content__text"> Many libraries wrap their code in IIFEs to created their own execution context. This removes the risk of overwriting variables or functions as each execution context creates its own variable environment.</p>

    <p class="content__text"> See 'Prototypal Inheritance' for more information. </p>

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
