<script>
export default {
  name: "Member",
  props: {
    githubName: {
      type: String,
      required: true
    },
    discordName: {
      type: String,
      required: false
    },
    roles: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    socials: {
      type: Array,
      required: false
    }
  },
  computed: {
    githubUrl() {
      return `https://github.com/${this.githubName}`;
    }
  },
  methods: {
    determineSocialIconFromUrl(url) {
      if (url.includes('twitter.com') || url.includes('x.com'))
        return ['fab', 'twitter'];

      //twitch
      if (url.includes('twitch.tv'))
        return ['fab', 'twitch'];

      //youtube
      if (url.includes('youtube.com'))
        return ['fab', 'youtube'];
    },
    getRoleColor(role) {
      if (this.discordRoles.hasOwnProperty(role))
        return this.discordRoles[role];
      else
        return "white";
    }
  }
}
</script>

<template>
  <div class="member">
    <div class="avatar">
      <img :src="githubUrl + '.png'" alt="avatar" />
    </div>
    <div class="info">
      <h2>{{ githubName }}</h2>
      <div class="discord-name" v-if="discordName">
        <font-awesome-icon :icon="['fab', 'discord']" />
        <span>{{ discordName }}</span>
      </div>
    </div>
    <div class="role-container">
      <div class="role" v-for="role in roles" :key="role" :style="'border-color: ' + getRoleColor(role)">
        <span class="role-color" :style="'background-color: ' + getRoleColor(role)"></span>
        <span class="role-name">{{ role }}</span>
      </div>
    </div>
    <div class="socials">
      <a :href="githubUrl" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
      <a v-for="social in socials" :href="social" target="_blank">
        <font-awesome-icon :icon="determineSocialIconFromUrl(social)" />
      </a>
    </div>
  </div>
</template>

<style scoped>
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

.discord-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: -10px;
}

.role-container {
  margin-top: auto;
  margin-bottom: 10px;
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
}

.role-color {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
}

.role-name {
  font-size: .8rem;
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