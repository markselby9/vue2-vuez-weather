<template>
  <div>
    <input v-model="city" placeholder="Please input a Chinese city like: Shanghai">
    <br>
    <button @click="onClickButton">What's the weather?</button>
  </div>
</template>

<script>
  export default {
    name: 'SubmitCity',
    data() {
      return {
        city: '',
      };
    },
    methods: {
      onClickButton() {
        this.$store.observe('city', this.city); // trigger action bind on 'city' name
      },
    },
  };
</script>
