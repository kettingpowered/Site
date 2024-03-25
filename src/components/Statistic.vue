<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  title: String,
  description: String,
  icon: Array[String]
})
</script>

<template>
  <div class="stat">
    <font-awesome-icon :icon="icon" size="3x"/>
    <p id="title">{{ title }}</p>
    <p id="desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.stat {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border: 1px solid var(--color-secondary);
  color: var(--color-text);
  background-color: var(--color-background);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

#title {
  font-size: 2.5em;
  font-weight: bold;
}
</style>