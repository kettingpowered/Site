<script>
export default {
  name: "Member",
  props: {
    githubName: {
      type: String,
      required: true
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
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.role-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 10px 0;
}

.role {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.8rem;
  border: 2px solid;
  padding: 0.25rem .5rem;
}

.role-color {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background: white;
}

.role-name {
  font-size: .8rem;
}

.socials {
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
}
</style>