<template>
  <div class="content__section">

    <p class="content__text"> A closure is when the variable environment of an execution context remains even after the execution context has finished and is removed from the execution stack. This is usually the case when a function returns another function. The returned function often uses variables from the function it resides (parent funciton) in even though it has finished executing. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      function cat(){
        const age = 5; // closure scoped vairable

        return function speed(){
          console.log(`Max speed of cat is ${age * 10} mph`)
        }
      }
      const Bobcat = cat();
      Bobcat(); // output: Max speed of cat is 50 mph
      </code>
    </pre>

    <p class="content__text"> As we can see, the 'age' variable is not declared inside the 'speed' function but rather in its outer environment (parent function). Even though this is the case, it is still available inside the 'speed' function because the variable environment of the 'cat' function still remains in memory long after it has finished executing. </p>

    <h3 class="content__subheading"> Garbage Collection </h3>
    <p class="content__text"> The variable environment does not remaing for eternity. After sometime, the JavaScript garbage collection cleans up the variable environment in order to save memory. </p>

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
