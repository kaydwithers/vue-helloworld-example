
<template lang="pug">
  .world
    p {{worldText}} {{coolNumber}}
</template>

<script>
  export default {
    name: 'world',
    props: {
      worldText: { default: 'World from default' },
      coolNumber: { default: 0 },
    },
  };
</script>
