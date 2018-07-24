<template>
  <div class="content__section">

    <h3 class="content__subheading"> Lexical </h3>
    <p class="content__text"> Lexical placement simply means where the code physically sits in the code base. </p>

    <h3 class="content__subheading"> Hoisting & Undefined </h3>
    <p class="content__text"> Hoisting is when the JavaScript engine moves variables and functions to the top of the execution context as soon as that execution context is created. A slot in memory is reserved for all the variables moved. The variables moved are not given a value (set to 'undefined') until the line setting up their value is executed. So attempting to use a variable before it has been set will return 'undefined'. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      // Variable Hoisting

      name; // ouput: 'undefined'
      var name = 'Bob';
      name; // ouput: 'Bob'
      </code>
    </pre>

    <p class="content__text"> What happens in the code above: </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      var name; // name variable is hoisted to the top and allocated space for in memory but not yet given a value
      name; // output: 'undefine' | attempting to use 'name' variable before line that gives it a value results in 'undefined'
      name = 'Bob'; // setting up value of 'name' variable
      name; // ouput: 'Bob'
      </code>
    </pre>

    <h3 class="content__subheading"> Functions </h3>
    <p class="content__text"> Functions are also hoisted but work a little differently. As soon as the execution context is created, the functions inside will be hoisted and its <span class="bold"> entire code </span> will be placed into memory. This step is what allows us to call a function before it has been declared. Function expressions are not hoisted whereas function statements are. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      // Function Hoisting

      run(); // 'Running'
      function run(){
        console.log('Running');
      }
      </code>
    </pre>

    <h3 class="content__subheading"> ES6: Let & Const </h3>
    <p class="content__text"> 'Var' is scoped to the function it resides in and is available to all blocks within the function. </p>

    <p class="content__text"> 'Let' and 'const' are keywords introduced in ES6 that are block scoped, unlike the 'var' keyword. 'Let' and 'const' are similar in that they are both scoped, meaning they are only available within the block they are used in, such as an 'if' statement. The only difference between 'let' and 'const' is that 'let' may be mutated whilst 'const' may only be set once. </p>


    <pre v-highlightjs>
      <code class="javascript" id="code">
      // var
      if(true){
        var age = 87;
      }
      age; // output: 87


      // let & const
      if(true){
        let name = 'Grinch';
      }
      name; // output: undefined
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
