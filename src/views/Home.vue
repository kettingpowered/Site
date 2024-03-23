<script>
export default {
  name: "Home"
}
</script>

<template>
<main>
  <section id="main">
    <div id="info">
      <h1>Ketting</h1>
      <h2>A fork of MinecraftForge with added Bukkit & Spigot patches</h2>

      <div class="button-group">
        <router-link :to="{ name: 'Download' }" class="button primary">Downloads</router-link>
        <router-link :to="{ name: 'FAQ' }" class="button">FAQ</router-link>
      </div>
    </div>

    <div id="terminal-container">
      <img src="@/assets/ketting-startup.png" alt="Terminal" id="terminal">
    </div>
  </section>
</main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

section {
  background-color: var(--color-background-mute);
  padding: 20px;
}
section:nth-child(even) {
  background-color: var(--color-background);
}
section > div {
  display: flex;
}

#main {
  display: flex;
  flex-direction: row;
  height: 60vh;
}
#info {
  flex-direction: column;
  justify-content: center;
  background-color: red;
  width: 75%;
}
#terminal-container {
  display: block;
  position: relative;
  width: 100%;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
}
#terminal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  #info {
    width: 100%;
  }
  #terminal-container {
    display: none;
  }
}
</style>