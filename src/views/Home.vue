<script>
import MainSection from '../components/home/sections/Main.vue';
import AboutSection from '../components/home/sections/About.vue';

export default {
  components: {
    MainSection,
    AboutSection,
  },
};
</script>

<template>
  <main>
    <MainSection />
    <AboutSection />
    <!--
    sections to add:
    - Stats
    - ...
    -->
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
}

section {
  background-color: var(--color-background-mute);
  padding: 40px;
}
section:nth-child(even) {
  background-color: var(--color-background);
}

section h1 {
  font-size: 3em;
  margin-bottom: 10px;
}
section h2,
section h3 {
  margin-bottom: 20px;
  color: var(--color-text);
}
section h2 {
  font-size: 2.2em;
}
section h3 {
  font-size: 1.5em;
}

.content {
  display: flex;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 15px;
}
.content > div {
  display: flex;
  flex-direction: column;
}
</style>