
<template lang="pug">
  .introduction
    p {{coolNumber}}
    p
      span(v-show='greeting') Greetings! 
      | Is this cool?
      span(v-if='isThisCool')  {{isThisCool}}
      span(v-else)  No!
</template>

<script>
  export default {
    name: 'introduction',
    props: {
      greeting: { default: '' },
      isThisCool: { default: false },
      coolNumber: { default: 666 },
    },
  };
</script>
