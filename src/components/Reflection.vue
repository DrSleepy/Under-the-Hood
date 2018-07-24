<template>
  <div class="content__section">

    <p class="content__text"> Before explaining reflection, note the 'For in' loop not only loops through an object, but also its prototype. </p>

    <p class="content__text"> Reflection means that an object can look at itself and change its own properties or methods. This process is mostly used when using the 'For in' loop. This is used to check whether the object being looped actually holds the property and is not a property of the prototype. This is done using 'hasOwnProperty' and is best for performance. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      const User = { 
        username: '',
        password: '',
        userDetails:  function(){}
      }

      const customer = Object.create(User);
      customer.username = 'Even';
      customer.password = 'Steven';

      for(item in customer){
        console.log(item);
      }

      // output:
      // username
      // password
      // userDetails
      </code>
    </pre>

    <p class="content__text"> If you look closely at the above code, you will notice that the 'For in' has looped over the prototype of 'customer'. We can tell by the fact that 'userDetails' (last line) was printed even though it does not physically live on the 'customer' object. Let's solve this by modifying the 'For in' to use 'hasOwnProperty'. </p>

    <pre v-highlightjs>
      <code class="javascript" id="code">
      for(item in customer){
        if(customer.hasOwnProperty(item)){
          console.log(item);
        }
      }

      // output:
      // username
      // password
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
