<template>
  <main>
    <section id="main">
      <div class="content">
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
  padding: 40px;
}
section:nth-child(even) {
  background-color: var(--color-background);
}
.content {
  display: flex;
  justify-content: center;
  max-width: 80rem;
  margin: 0 auto;
}
.content > div {
  display: flex;
}

#info {
  flex-direction: column;
  justify-content: center;
  width: 75%;
}
#info h1 {
  font-size: 3em;
  margin-bottom: 10px;
}
#info h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--color-text);
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
  justify-content: flex-end;
  align-items: center;
}
#terminal {
  width: auto;
  height: 300px;
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