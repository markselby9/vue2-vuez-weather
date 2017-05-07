<template>
  <div class="body">
    <submit-city></submit-city>
    <show-result></show-result>
  </div>
</template>

<script>
  import SubmitCity from './SubmitCity';
  import ShowResult from './ShowResult';
  import getWeatherByCity from '../lib/http';

  export default {
    name: 'weather',
    components: {
      ShowResult, SubmitCity,
    },
    created() {
      // bind the observer name 'city' with corresponding actions
      this.$store.action('city', (city) => {
        getWeatherByCity(city, (response) => {
          // on success, show result
          console.log('trigger result', JSON.stringify(response));
          this.$store.observe('result', JSON.stringify(response));
        }, (error) => {
          // on error, show error
          this.$store.observe('result', JSON.stringify(error));
        });
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
