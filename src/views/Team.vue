<script>
import Member from "@/components/team/Member.vue";

export default {
  name: "Team",
  components: {
    Member
  }
}
</script>

<template>
  <div id="content">
    <h1>Meet the Team</h1>
    <div class="members">
      <Member github-name="JustRed23" :roles="['Owner', 'Contributor']" :socials="['https://twitter.com/JustRed23', 'https://twitch.tv/JustRed23', 'https://youtube.com/@justred2337']" />
      <Member github-name="C0D3-M4513R" :roles="['Admin', 'Contributor']" :socials="['https://twitter.com/C0D3M4513R', 'https://www.twitch.tv/c0d3_m4513r', 'https://www.youtube.com/channel/UC30moJmnYyVmD2RkhRjOxpw']" />
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>