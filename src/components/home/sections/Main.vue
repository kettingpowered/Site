<script>
export default {
  name: "Main"
}
</script>

<template>
  <section class="main">
    <div class="content">
      <div id="info">
        <h1>Ketting</h1>
        <h3>A fork of MinecraftForge with added Bukkit & Spigot patches</h3>

        <div class="button-group">
          <router-link :to="{ name: 'Download' }" class="button primary">Downloads</router-link>
          <router-link :to="{ name: 'FAQ' }" class="button">FAQ</router-link>
        </div>
      </div>

      <div id="terminal-container">
        <img src="@/assets/ketting-startup.png" height="300" width="493.75" alt="Terminal" id="terminal" >
      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  display: flex;
  min-height: 60vh;
  align-content: center;
}

#info {
  justify-content: center;
  width: 75%;
}
.button-group {
  display: flex;
  gap: 10px;
}
.button {
  padding: 7px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  background-color: var(--color-background-soft);
  color: var(--color-link);
  transition: background-color 0.2s;
  user-select: none;
}
.button:hover {
  background-color: var(--color-background);
  color: var(--color-link-hover);
}
.button.primary {
  background-color: var(--color-primary);
}
.button.primary:hover {
  background-color: var(--color-primary-dark);
}

#terminal-container {
  justify-content: center;
  align-items: center;
}
#terminal {
  border-radius: 10px;
  box-shadow: 0 0 15px black;
  margin: 20px;
}

@media (max-width: 1000px) {
  #terminal-container {
    display: none;
  }
  #info {
    width: 100%;
  }
}
</style>
