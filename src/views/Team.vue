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
      <Member github-name="LarcekGiglamesh" discord-name="Larcek" :roles="['Admin', 'Staff']" :socials="['https://www.twitch.tv/larcek']" />
      <Member github-name="wolflord212312" discord-name="DjJewl" :roles="['Staff']" :socials="['https://www.youtube.com/channel/UCZGOR6R6054S8h3UYlG1eyg']" />
      <Member github-name="LeStegii" :roles="['Staff']" :socials="['https://www.twitch.tv/ueberallgebannt', 'https://www.youtube.com/channel/UCM9WaPEk7RclWZyyFcYRAwQ']" />
      <Member github-name="p0t4t0sandwich" discord-name="ThePotatoKing" :roles="['Staff']" :socials="['https://www.twitch.tv/bob_and_sparkles', 'https://www.youtube.com/channel/UCB70eOPhOIWr7H-J58OZAZw']" />
      <Member github-name="Kit4444" discord-name="Chris ツ" :roles="['Helper']" :socials="['https://www.twitch.tv/chriswille2856', 'https://www.youtube.com/channel/UCkTayY7PX4oV2DBABEaDQKQ']" />
      <Member github-name="Mattaous" :roles="['Helper']" :socials="['https://www.twitch.tv/mattaoustv', 'https://www.youtube.com/channel/UCvnxsFaR7JL3chGAGADurHA']" />
      <Member github-name="Soapy7261" :roles="['Helper']" />
      <Member github-name="Almighty-Satan" :roles="['Contributor']" />
      <Member github-name="m1lc0lm" discord-name="Malcolm" :roles="['Contributor']" :socials="['https://www.twitch.tv/malcolm3000']" />
      <Member github-name="TonimatasDEV" :roles="['Contributor']" :socials="['https://www.twitch.tv/tonimatasdev', 'https://www.youtube.com/channel/UCUB8iy2bYCvlF2JZBi3vTIw']" />
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