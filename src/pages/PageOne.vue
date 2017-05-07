
<template>
  <div class="page-one">
    <introduction 
      greeting="true" 
      isThisCool="Yes!" 
      coolNumber="007" 
    />
    <hello 
      helloText="Hello" 
      coolNumber="1" 
    />
  </div>
</template>

<script>
  import Introduction from '@/components/Introduction';
  import Hello from '@/components/Hello';

  export default {
    name: 'page-one',
    components: {
      Introduction,
      Hello,
    },
  };
</script>
