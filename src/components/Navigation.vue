<script setup>
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="nav-menu">
    <div class="mobile-button-group">
      <font-awesome-icon :icon="faBars" id="mobile-button" @click="showMenu" />
      <font-awesome-icon :icon="faBarsStaggered" id="mobile-button" class="hidden" @click="closeMenu" />
      <Logo id="logo-mobile" />
    </div>
    <div class="nav-content closed-menu">
      <Logo id="logo" />
      <menu class="nav-items" aria-label="Navigation Menu">
        <router-link class="nav-item" @click="closeMenu" to="/">Home</router-link>
        <router-link class="nav-item" @click="closeMenu" :to="{ name: 'FAQ' }">FAQ</router-link>
        <router-link class="nav-item" @click="closeMenu" :to="{ name: 'Team' }">Team</router-link>
        <router-link class="nav-item" @click="closeMenu" :to="{ name: 'Download' }">Download</router-link>
      </menu>
      <div class="flex-grow-all"></div>
      <div class="navbar-icons" aria-label="Other Useful Links">
        <a class="navbar-icon" :href="global.discordUrl" target="_blank" aria-label="Discord Link">
          <font-awesome-icon :icon="faDiscord" />
        </a>
        <a class="navbar-icon" :href="global.githubUrl" target="_blank" aria-label="Github Link">
          <font-awesome-icon :icon="faGithub" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';

const menuOpenEle = () => document.querySelector(".nav-menu").querySelector(".mobile-button-group").querySelector("#mobile-button:nth-child(1)");
const menuClosedEle = () => document.querySelector(".nav-menu").querySelector(".mobile-button-group").querySelector("#mobile-button:nth-child(2)");
const menuContentEle = () => document.querySelector(".nav-menu").querySelector(".nav-content");

export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = true;
      menuOpenEle().classList.add("hidden");
      menuClosedEle().classList.remove("hidden");
      const menuContentObj = menuContentEle();
      menuContentObj.classList.remove("closed-menu");
      menuContentObj.classList.add("open-menu");

    },
    closeMenu() {
      this.showMobileMenu = false;
      menuOpenEle().classList.remove("hidden");
      menuClosedEle().classList.add("hidden");
      const menuContentObj = menuContentEle();
      menuContentObj.classList.add("closed-menu");
      menuContentObj.classList.remove("open-menu");
    },
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.flex-grow-all {
  flex-grow: 1
}

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
  user-select: none;
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
