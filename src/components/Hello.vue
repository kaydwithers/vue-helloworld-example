
<template lang="pug">
  .hello
    p {{helloText}} {{coolNumber}}
</template>

<script>
  export default {
    name: 'hello',
    props: {
      helloText: { default: 'Hello from default' },
      coolNumber: { default: 0 },
    },
  };
</script>
