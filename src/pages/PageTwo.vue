
<template>
  <div class="page-two">
    <introduction />
    <world 
      worldText="World!" 
      coolNumber="2" 
    />
  </div>
</template>

<script>
  import Introduction from '@/components/Introduction';
  import World from '@/components/World';

  export default {
    name: 'page-two',
    components: {
      Introduction,
      World,
    },
  };
</script>
