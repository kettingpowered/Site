<script setup>
import { faSpinner, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


defineProps({
  title: [String, Number],
  description: String,
  icon: Object,
  loading: Boolean,
  error: Boolean
});
</script>

<template>
  <div class="stat">
    <div v-if="loading" class="loading-spinner">
      <font-awesome-icon :icon="faSpinner" pulse size="3x" />
    </div>
    <div v-else>
      <div class="error-icon" v-if="error">
        <font-awesome-icon :icon="faCircleExclamation" size="lg" />
      </div>
      <font-awesome-icon :icon="icon" size="3x"/>
      <p id="title">{{ title }}</p>
      <p id="desc">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.stat {
  position: relative;
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
  user-select: none;
}

#title {
  font-size: 2.5em;
  font-weight: bold;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.loading-spinner > * {
  margin: auto;
}

.error-icon {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
