<script>
export default {
  name: "About"
}
</script>

<template>
  <section class="about">
    <div class="content">
      <div id="info">
        <div id="calculation">
          <div id="sum">
            <img src="@/assets/forge.svg" alt="MinecraftForge">
            <span id="plus-icon">+</span>
            <img src="@/assets/spigot.png" alt="Spigot">
          </div>
          <span id="equals-icon">=</span>
          <img src="@/assets/ketting.png" alt="Ketting">
        </div>
        <div id="text">
          <h2>What is Ketting?</h2>
          <p>
            Ketting is a Minecraft server software that combines the best of both Forge and Spigot. It allows you to run
            mods and plugins on the same server, (hopefully) without any issues.
          </p>
          <p>
            Ketting was made by <strong>JustRed23</strong>, one of the former developers of <a id="magma" href="https://magmafoundation.org/" target="_blank">Magma</a>.
            After the project was abandoned, he decided to continue it on his own, <router-link id="team" :to="{ name: 'Team' }">but was soon joined by other developers who helped him out</router-link>.
            Due to many issues with the original codebase, they decided to start from scratch and rewrite the entire project, making it more stable and easier to work with.
          </p>
          <p>
            Ketting is currently still in active development, but you can already download and test it out for yourself. <strong>Just keep in mind that it's still in beta, so there might be some bugs.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#magma {
  color: orangered;
}
#magma:hover {
  text-decoration: underline;
  color: darkorange;
}

#team {
  color: var(--color-link-secondary)
}
#team:hover {
  text-decoration: underline;
  color: var(--color-link-secondary-hover)
}

strong {
  font-weight: bold;
}

#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#calculation {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

#sum {
  display: flex;
  align-items: center;
}

#calculation img {
  width: 150px;
  height: 150px;
  object-fit: contain;

  background-color: var(--color-background-mute);

  border-radius: 10px;
  box-shadow: 0 0 10px var(--color-border);
  margin: 0 20px;
  padding: 10px;
}
#calculation img[alt="Ketting"] {
  padding: 20px; /* Give the Ketting logo a bit more padding */
}

#plus-icon,
#equals-icon {
  font-size: 4em;
  margin: 0 40px;
}

#text {
  margin: 40px 0;
}

p:not(:last-child) {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  #sum {
    flex-direction: column;
    align-items: center;
  }

  #calculation img {
    width: 100px;
    height: 100px;
  }

  #calculation img[alt="Ketting"] {
    padding: 10px;
  }

  #plus-icon,
  #equals-icon {
    font-size: 2em;
    margin: 0 10px;
  }
}
</style>