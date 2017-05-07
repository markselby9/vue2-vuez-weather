<template>
  <div>
    <p>The result from server:</p>
    <p>{{result}}</p>
  </div>
</template>

<script>
  export default {
    name: 'ShowResult',
    data() {
      return {
        result: '',
      };
    },
    created() {
      this.$store.action('result', (result) => {
//        console.log('action triggered');
        if (result) {
          this.result = result;
        }
      });
    },
  };
</script>
