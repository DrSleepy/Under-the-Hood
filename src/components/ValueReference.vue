<template>
  <div class="content__section">

    <p class="content__text"> Primitives (numbers, strings, boolean) are saved by value. Objects (and arrays) are saved by reference. </p>

    <h3 class="content__subheading"> Value </h3>
    <p class="content__text"> Saving by value means that when a variable is set to equal another primitive variable, a <span class="bold">copy</span> of the primitive variable is made during that exact moment. A copy can become outdated if the original is changed. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      let salary = 50;

      let managerSalary = salary;
      managerSalary; // output: 50

      salary = 7;
      managerSalary; // output: 50
      </code>
    </pre>

    <h3 class="content__subheading"> Reference </h3>
    <p class="content__text"> Saving by reference means that when a variable is set to equal an object, a <span class="bold">link</span> is made from the variable to the slot <span class="bold">in memory</span> where the JavaScript engine decided to save the object. A link cannot become outdated as a link provides direct access to the original. If the original is mutated at any moment, every link will be updated with the new version. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      let myGames = ['Runescape', 'Fortnite', 'Titanfall 2'];

      let yourGames = myGames;
      yourGames; // output: ['Runescape', 'Fortnite', 'Titanfall 2']

      myGames.push('Battlefield 3')
      yourGames; // output: ['Runescape', 'Fortnite', 'Titanfall 2', 'Battlefield 3']
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
