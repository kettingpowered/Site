<template>
  <div class="top-nav-menu nav-menu">
    <font-awesome-icon :icon="this.showMobileMenu ? 'bars-staggered' : 'bars'" id="mobile-button" @click="showMenu" />
    <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
      <img class="logo" src="@/assets/ketting.png" alt="Ketting logo">
      <menu class="nav-items">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" :to="{ name: 'FAQ' }">Faq</router-link>
        <router-link class="nav-item" :to="{ name: 'Download' }">Download</router-link>
      </menu>
     <div class="flex-grow"></div>
     <a class="navbar-icon" href="https://discord.kettingpowered.org">
	<font-awesome-icon :icon="['fab', 'discord']" />
    </a>
    <a class="navbar-icon" href="https://github.com/kettingpowered/Ketting-1-20-x">
        <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
.nav-menu {
  background-color: #AAA;
  color: black;
  padding: 3px 0;
}

.nav-content {
  display: flex;
  padding: 5px 15px;
  align-items: center;
}

.logo {
  width: 30px;
  margin-right: 20px;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 20px;
  text-decoration: none;
  color: black;

  transition: color 0.3s;
}
.nav-item:hover {
  color: white;
}

#mobile-button {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }

  .open-menu {
    opacity: 1;
  }

  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
  }

  .logo {
    margin: 0;
  }

  .nav-items {
    flex-direction: column;
    margin-top: 10px;
  }

  .nav-item {
    margin: 5px 0;
  }

  #mobile-button {
    display: block;
    padding: 0 10px 10px 10px;
    font-size: 1.5em;
  }
}
</style>
