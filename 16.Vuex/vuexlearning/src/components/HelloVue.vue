<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.stu20 }}</h2>
    <h2>{{ $store.getters.stu20.length }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVue",
};
</script>

<style>
</style>