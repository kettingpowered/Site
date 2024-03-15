<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink :to="{ name: 'FAQ' }">FAQ</RouterLink>
    |
    <RouterLink :to="{ name: 'Download' }">Download</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
