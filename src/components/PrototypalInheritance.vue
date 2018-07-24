<template>
  <div class="content__section">

    <p class="content__text"> Prototypal inheritance works similarly to 'Function Constructors' so this will be brief.</p>

    <h3 class="content__subheading"> The __proto__ </h3>
    <p class="content__text"> Prototypal inheritance is when an object inherits the properties and method of another and adds them to the __proto__ of the object being created. This is differerent to function contructors as function contructors will add the properties and variables to the object rather than the __proto__.</p>

    <h3 class="content__subheading"> ES5 Prototypal inheritance: </h3>
    <pre v-highlightjs>
      <code class="javascript" id="code">
      const car = Object.create(prototypeObjectHere)
      // The object passed to Object.create will become the prototype of 'car'
      </code>
    </pre>

    <h3 class="content__subheading"> ES6 Prototypal inheritance: </h3>
    <pre v-highlightjs>
      <code class="javascript" id="code">
      class Car extends prototypeObjectHere {}
      </code>
    </pre>

    <p class="content__text"> Both ES5 and ES6 code achieve the same result. In ES6, the prototype is set using the 'extends' keyword. </p>

    <p class="content__text"> See 'Function Constructors' for more information.. </p>

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
