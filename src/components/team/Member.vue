<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
</script>

<script>
export default {
  name: "Member",
  head(){
    return {link: {
      rel: 'preload',
      as: 'image',
      href: this.image,
    }};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: false,
    },
    alternateNames: {
      names: [{
        icon: Array,
        name: String,
      }],
      required: false
    },
    roles: {
      type: Array,
      required: true
    },
    socials: {
      type: Array,
      required: false
    }
  },
  methods: {
    determineSocialIconFromUrl(url) {
      if (url.includes('github.com'))
        return faGithub;

      if (url.includes('twitter.com') || url.includes('x.com'))
        return faTwitter;

      //twitch
      if (url.includes('twitch.tv'))
        return faTwitch;

      //youtube
      if (url.includes('youtube.com'))
        return faYoutube;
    },
    getLabelFromUrl(url) {
      if (url.includes('github.com'))
        return 'Github';

      if (url.includes('twitter.com') || url.includes('x.com'))
        return 'Twitter';

      //twitch
      if (url.includes('twitch.tv'))
        return 'Twitch';

      //youtube
      if (url.includes('youtube.com'))
        return 'Youtube';
    }
  }
}
</script>

<template>
  <div class="member">
    <div class="avatar">
      <img :src="image" alt="avatar" />
    </div>
    <div>
      <div class="info">
        <h2>{{ name }}</h2>
        <div v-for="aName in alternateNames" class="alternate-names" v-if="alternateNames">
          <font-awesome-icon :icon="aName.icon"></font-awesome-icon>
          <span>{{ aName.name }}</span>
        </div>
      </div>
      <div class="role-container">
        <div class="role" v-for="role in roles" :key="role" :class="role.toLowerCase()">
          <span class="role-color" :class="role.toLowerCase()"></span>
          <span class="role-name">{{ role }}</span>
        </div>
      </div>
    </div>
    <details class="description-container" v-if="description">
      <summary>Details</summary>
      <ul class="description" v-for="sDescription in description">
        <li>{{sDescription}}</li>
      </ul>
    </details>
    <div class="socials">
      <a v-for="social in socials" :href="social" target="_blank" :aria-label="getLabelFromUrl(social)">
        <font-awesome-icon :icon="determineSocialIconFromUrl(social)"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.owner {
  --role-color: #660000;
}
.admin {
  --role-color: #ffcc00;
}
.staff {
  --role-color: #ff6633;
}
.helper {
  --role-color: #ff3333;
}
.contributor {
  --role-color: #33cc99;
}

.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  width: 250px;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  user-select: none;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 65px;
}

.alternate-names {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: -10px;
}

.role-container {
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.role {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  border: 2px solid;
  padding: 0.25rem .5rem;
  user-select: none;
  border-color: var(--role-color);
}

.role-color {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background-color: var(--role-color);
}

.role-name {
  font-size: .8rem;
}

.description-container summary {
  cursor: pointer;
  text-align: center;
}

.description-container {
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
}

.description {
  text-align: left;
  font-size: .9rem;
  line-height: 1.5;
  margin: .5rem auto;
  padding: 0 2.5rem;
  width: 100%;
  justify-content: center;
}

.socials {
  margin-top: auto;
  font-size: 1.2rem;
  display: flex;
  gap: 1.5rem;
  border-top: 1px solid var(--color-border);
  padding-top: .8rem;
  width: 80%;
  justify-content: center;
}

.socials a {
  color: var(--color-link-secondary);
}
.socials a:hover {
  color: var(--color-link-secondary-hover);
}
</style>
