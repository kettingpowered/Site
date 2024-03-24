<script>
export default {
  name: "About"
}
</script>

<template>
  <section id="about">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cumque cupiditate delectus dolor, earum eligendi est exercitationem explicabo impedit molestiae nemo, nesciunt nulla officiis, omnis repellat totam! Consequatur culpa dignissimos ea error esse est excepturi, expedita, facere maxime minima nihil placeat. Eaque harum illum laudantium nihil obcaecati quas voluptas?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque beatae corporis delectus dignissimos dolorem dolores error facere in nesciunt non placeat rem similique, soluta!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

  background-color: var(--color-background-soft);

  border-radius: 10px;
  box-shadow: 0 0 10px var(--color-background-mute);
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
  margin-top: 35px;
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