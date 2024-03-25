<template>
  <div class="nav-menu">
    <div class="mobile-button-group">
      <font-awesome-icon :icon="this.showMobileMenu ? 'bars-staggered' : 'bars'" id="mobile-button" @click="showMenu" />
      <Logo id="logo-mobile" />
    </div>
    <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
      <Logo id="logo" />
      <menu class="nav-items">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" :to="{ name: 'FAQ' }">FAQ</router-link>
        <router-link class="nav-item" :to="{ name: 'Download' }">Download</router-link>
      </menu>
      <div style="flex-grow: 1"></div>
      <div class="navbar-icons">
        <a class="navbar-icon" :href="global.discordUrl" target="_blank">
          <font-awesome-icon :icon="['fab', 'discord']" />
        </a>
        <a class="navbar-icon" :href="global.githubUrl" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
.nav-menu {
  background-color: var(--color-primary);
}

.nav-content {
  display: flex;
  padding: 5px 15px;
  align-items: center;

  max-width: 80rem;
  margin: 0 auto;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1.2em;
}

.nav-item {
  margin: 0 20px;
  text-decoration: none;
  transition: color 0.2s;
}

.navbar-icon {
  padding: .9rem;
  font-size: x-large;
}

.mobile-button-group {
  display: none;
}

#mobile-button {
  color: var(--color-link);
}

@media screen and (max-width: 768px) {
  .open-menu {
    opacity: 1;
    pointer-events: auto;
  }

  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;

    pointer-events: none;
  }

  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    align-items: normal;
  }

  .nav-items {
    flex-direction: column;
    margin-bottom: 10px;
    align-items: normal;

    padding: 0;
  }

  .nav-item {
    margin: 15px 0;
  }

  .mobile-button-group {
    display: flex;
    align-items: center;
  }

  #mobile-button {
    width: 23px;
    font-size: 1.5em;
    margin-left: 15px;
  }

  #logo-mobile {
    margin-left: 20px;
  }
  #logo {
    display: none;
  }

  .navbar-icons {
    border-top: 2px solid var(--color-link);
  }
}
</style>
