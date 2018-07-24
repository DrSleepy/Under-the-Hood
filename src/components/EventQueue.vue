<template>
  <div class="content__section">

    <p class="content__text"> The event queue holds events such as click events, HTTP requests etc which are only looked at
      <span class="bold"> after </span> the execution stack is empty. </p>

    <h3 class="content__subheading"> Event Queue Blocking </h3>
    <p class="content__text"> If the execution stack has a function that's running a for loop, then the event queue will not be looked at until the for loop has completed. Let's put this to the test by running a for loop then clicking before the for loop has finished executing. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      for ( let i = 0; i < 1000; i++ ){
        console.log(i);
      }

      window.addEventListener('click', function(){
        console.log('window clicked');
      });

      // Output:
      // 1
      // 2
      // (user clicks on window)
      // ...
      // 1000
      // window clicked
      </code>
    </pre>

    <p class="content__text"> If the event queue contains more than 1 event, the first event will be processed (given that the execution stack is empty). Then before processing the 2nd event, the execution stack will be looked at once more to make sure it is empty before proceeding to the 2nd event in the queue. </p>

    <h3 class="content__subheading"> Event Queue vs SetTimeout </h3>
    <p class="content__text"> SetTimeout unlike a for loop
      <span class="bold">does not</span> block the execution stack. This is because the browser specifically deals with setTimeout whenever it is used, meaning it does not physically sit on the execution stack nor the event queue. As soon as the setTimeout is executed, it is processed by the browser separately in isolation. Once the timer has completed, only then will it be into the event queue (not execution stack) to be processed as normal.</p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      console.log('before setTimeout');
      
      setTimeout(function(){
        console.log('setTimeout has finished');
      }, 1000);

      console.log('after setTimeout');

      window.addEventListener('click', function(){
        console.log('window clicked');
      });

      // Output:
      // before setTimeout
      // after setTimeout
      // (user clicks on window) window clicked
      // (1000ms later) setTimeout has finished
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
