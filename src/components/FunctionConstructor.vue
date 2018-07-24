<template>
  <div class="content__section">

    <p class="content__text"> A function constructor is a function attempting to act as a class (like in Java) by creating an object once executed. It is called a function constructor because it is creating an object using a function. It is best practise to capitalise the first letter of the function name when treating it like a class. </p>

    <h3 class="content__subheading"> 'This' keyword </h3>
    <p class="content__text"> Remembering that functions are objects, function constructors often use the 'this' keyword to create properties and methods within the function when invoked. Doing so creates an object with properties and methods, like a class would. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      function Car(make, year){
        this.make = make;
        this.year = year;
        this.drive = function(){ console.log('car is driving') }
      }

      const nissan = new Car('nissan', 1995);
      nissan; // output: {make: 'nissan', year: 1995, drive: ƒ}
      </code>
    </pre>

    <h3 class="content__subheading"> 'New' keyword </h3>
    <p class="content__text"> In order to call a function constructor, the 'new' keyword is used. </p>
    <p class="content__text"> The keyword 'new' is an operator that creates an empty object. The Car function will create a fresh execution context with its own 'this' keyword. The word 'new' keyword changes the context of the 'this' keyword so that it now points to the empty object it has created. Behind the scenes, this is almost exactly what is happening (excluding the setup of the prototype):</p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      const car = {}
      car.make = 'nissan';
      car.year = 1995;
      </code>
    </pre>

    <h3 class="content__subheading"> Performance </h3>
    <p class="content__text"> It is important to always put methods of a function constructor in the prototype and not in the function constructor as you would with primitive properties. Doing so helps with performance (saves memory) as there can be multiple objects but only one prototype. Only methods are to be saved to the prototype and not primitive properties as methods stay the same whilst primitive properties change. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      function Car(make, year){
        this.make = make;
        this.year = year;
      }
      
      Car.prototype.drive = function(){ console.log('car is driving') }
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
