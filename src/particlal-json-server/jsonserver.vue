<template>
  <div>
      <h1>jsonser</h1>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
      this.getlist()
  },
  methods: {
    getlist() {
      axios
        .get("  http://localhost:3000/heroes")
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped>
</style>
