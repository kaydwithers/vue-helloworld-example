
<template lang="pug">
  #app
    introduction
    hello
    world

    nav
      router-link(to='/') Home
      router-link(to='/PageOne') Page One
      router-link(to='/PageTwo') Page Two

      router-view
</template>

<script>
  import Introduction from './components/Introduction';
  import Hello from './components/Hello';
  import World from './components/World';

  export default {
    name: 'app',
    components: {
      Introduction,
      Hello,
      World,
    },
  };
</script>
