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
        <h2>Forge with Bukkit & Spigot support</h2>

        <div class="button-group">
          <router-link :to="{ name: 'Download' }" class="button primary">Downloads</router-link>
          <router-link :to="{ name: 'FAQ' }" class="button" id="faq">FAQ</router-link>
        </div>
      </div>

      <div id="terminal-container">
        <picture>
          <source media="(max-width: 1000px)" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
          <img src="@/assets/ketting-startup.png" height="300" width="493" alt="Terminal" id="terminal" />
        </picture>
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
#faq {
  color: var(--color-link-opposite);
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
