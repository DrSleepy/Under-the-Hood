<template>
  <div class="root">
    <header class="header">
      <p class="slogan"> Under the Hood </p>
      <h1 class="language"> JavaScript </h1>
    </header>

    <section class="container">
      <Block :title="'Execution Context'">
        <ExecutionContext/>
      </Block>
      <Block :title="'Bind, Call & Apply'">
        <BindCallApply/>
      </Block>
      <Block :title="'Closures'">
        <Closures/>
      </Block>
      <Block :title="'Coercion'">
        <Coercion/>
      </Block>
      <Block :title="'Event Queue'">
        <EventQueue/>
      </Block>
      <Block :title="'Functions'">
        <Functions/>
      </Block>
      <Block :title="'Function Constructor'">
        <FunctionConstructor/>
      </Block>
      <Block :title="'Immediately Invoked Function Expressions'">
        <IIFE/>
      </Block>
      <Block :title="'Lexical Placement, Hoisting & Undefined'">
        <LexicalHoistingUndefined/>
      </Block>
      <Block :title="'Objects'">
        <Objects/>
      </Block>
      <Block :title="'Precedence & Associativity'">
        <Precedence/>
      </Block>
      <Block :title="'Prototype'">
        <Prototype/>
      </Block>
      <Block :title="'Prototypal Inheritance'">
        <PrototypalInheritance/>
      </Block>
      <Block :title="'Reflection'">
        <Reflection/>
      </Block>
      <Block :title="'Scope Chain'">
        <ScopeChain/>
      </Block>
      <Block :title="'Use Strict'">
        <UseStrict/>
      </Block>
      <Block :title="'Value vs Reference'">
        <ValueReference/>
      </Block>
    </section>

    <footer class="footer">
      <h2 class="question"> Spotted a mistake? Let me know!</h2>
      <a class="email" href="mailto:M-Subahi@hotmail.com">M-Subahi@hotmail.com</a>
    </footer>
  </div>
</template>

<script lang="ts">
import Block from './components/Block.vue';

import BindCallApply from './components/BindCallApply.vue';
import Closures from './components/Closures.vue';
import Coercion from './components/Coercion.vue';
import EventQueue from './components/EventQueue.vue';
import ExecutionContext from './components/ExecutionContext.vue';
import FunctionConstructor from './components/FunctionConstructor.vue';
import Functions from './components/Functions.vue';
import IIFE from './components/IIFE.vue';
import LexicalHoistingUndefined from './components/LexicalHoistingUndefined.vue';
import Objects from './components/Objects.vue';
import Precedence from './components/Precedence.vue';
import PrototypalInheritance from './components/PrototypalInheritance.vue';
import Prototype from './components/Prototype.vue';
import Reflection from './components/Reflection.vue';
import ScopeChain from './components/ScopeChain.vue';
import UseStrict from './components/UseStrict.vue';
import ValueReference from './components/ValueReference.vue';

export default {
  components: {
    BindCallApply,
    Block,
    Closures,
    Coercion,
    EventQueue,
    ExecutionContext,
    FunctionConstructor,
    Functions,
    IIFE,
    LexicalHoistingUndefined,
    Objects,
    Precedence,
    PrototypalInheritance,
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
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  height: 100%;
  color: @black-text-color;
  font-family: 'main-font-normal';
}

.container {
  grid-column: 1 / span 24;

  @media @laptop {
    grid-column: 3 / span 20;
  }
  @media @desktop {
    grid-column: 6 / span 14;
  }
  @media @desktop-large {
    grid-column: 8 / span 10;
  }
}

// Header Text
.header {
  .pad-3;
  grid-column: 1 / span 24;
  background-color: @primary-theme-color;

  @media @laptop {
    grid-column: 3 / span 20;
    background-color: transparent;
  }
  @media @desktop {
    grid-column: 5 / span 16;
  }
  @media @desktop-large {
    grid-column: 7 / span 12;
  }
}
.slogan {
  .mega;
  color: white;
}
.language {
  .yotta;
  font-family: 'main-font-medium';
}

.footer {
  .pad-10;
  display: grid;
  grid-column: 1 / span 24;
  justify-items: center;
}
.question {
  .push-down-2;
  color: #6d7f9e;
}
.email {
  color: #0d1977;
  transition: 250ms;

  &:hover {
    color: #2b40ef;
  }
}
</style>
