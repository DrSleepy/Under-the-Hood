<template>
  <div class="root">

    <header class="header">
      <p class="slogan"> Under the Hood </p>
      <h1 class="language"> JavaScript </h1>
    </header>

    <Block :title="'Value vs Reference'">
      <ValueReference/>
    </Block>

  </div>
</template>

<script lang="ts">
import Block from './components/Block.vue';
import BindCallApply from './components/BindCallApply.vue';
import ExecutionContext from './components/ExecutionContext.vue';
import Coercion from './components/Coercion.vue';
import Closures from './components/Closures.vue';
import EventQueue from './components/EventQueue.vue';
import FunctionConstructor from './components/FunctionConstructor.vue';
import Functions from './components/Functions.vue';
import LexicalHoistingUndefined from './components/LexicalHoistingUndefined.vue';
import IIFE from './components/IIFE.vue';
import Objects from './components/Objects.vue';
import PrototypalInheritance from './components/PrototypalInheritance.vue';
import Precedence from './components/Precedence.vue';
import Prototype from './components/Prototype.vue';
import Reflection from './components/Reflection.vue';
import ScopeChain from './components/ScopeChain.vue';
import UseStrict from './components/UseStrict.vue';
import ValueReference from './components/ValueReference.vue';

export default {
  components: {
    Block,
    BindCallApply,
    ExecutionContext,
    Coercion,
    Closures,
    EventQueue,
    FunctionConstructor,
    Functions,
    LexicalHoistingUndefined,
    IIFE,
    Objects,
    PrototypalInheritance,
    Precedence,
    Prototype,
    Reflection,
    ScopeChain,
    UseStrict,
    ValueReference
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
// Global styles
@import './styles/reset.less';
@import './styles/base.less';
</style>

<style lang="less" scoped>
// Scoped styles
@import (reference) './styles/index.less';

.root {
  height: 100%;
  color: @black-text-color;
  font-family: 'main-font-normal';
}

// Header Text
.header {
  .pad-3;
  background-color: @primary-theme-color;
}
.slogan {
  .mega;
  color: white;
}
.language {
  .yotta;
  font-family: 'main-font-medium';
}
</style>
