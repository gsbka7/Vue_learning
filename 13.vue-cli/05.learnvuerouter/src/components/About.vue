<template>
  <div>
    <h2>關於_h2</h2>
    <p>關於_p</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log("about created");
  },
  destroyed() {
    console.log('about destroyed');
  }
};
</script>

<style>
</style>