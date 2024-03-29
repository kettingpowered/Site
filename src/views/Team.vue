<script setup>
import {useHead} from "@unhead/vue";

useHead({
  link: {
    rel: 'canonical',
    href: 'https://kettingpowered.org/team'
  }
})
</script>

<script>
import chris from '@/assets/team-chris.webp';
import djjewl from '@/assets/team-djjewl.webp';
import larcek from '@/assets/team-larcek.webp';
import Member from "@/components/team/Member.vue";

export default {
  name: "Team",
  head() {
    return {
      title: this.unhead.formattedTitle("Meet the Team"),
      meta: [
        {
          property: 'og:title',
          content: this.unhead.formattedTitle("Meet the Team"),
        },
        {
          property: 'og:description',
          content: 'Ketting, A fork of MinecraftForge with added Bukkit & Spigot patches'
        },
        {
          property: 'og:image',
          content: `${this.global.githubUrl}.png`
        },
        {
          property: 'og:url',
          content: this.global.url + 'team'
        },
      ]
    };
  },
  components: {
    Member
  }
}
</script>

<template>
  <div id="content">
    <h1>Meet the Team</h1>
    <div class="members">
      <Member
          name="JustRed23"
          image="https://github.com/JustRed23.png?size=256"
          :roles="['Owner', 'Contributor']"
          :description="['Creator, Owner & Maintainer']"
          :socials="['https://github.com/JustRed23','https://twitter.com/JustRed23', 'https://twitch.tv/JustRed23', 'https://youtube.com/@justred2337']"
      />
      <Member
          name="C0D3 M4513R"
          image="https://github.com/C0D3-M4513R.png?size=256"
          :roles="['Admin', 'Contributor']"
          :description="['Creator of KettingLauncher', 'Hosts Ketting Releases', 'Hosts Ketting\'s Website']"
          :socials="['https://github.com/C0D3-M4513R','https://twitter.com/C0D3M4513R', 'https://www.twitch.tv/c0d3_m4513r', 'https://www.youtube.com/channel/UC30moJmnYyVmD2RkhRjOxpw']"
      />
      <Member
          name="TonimatasDEV"
          image="https://github.com/TonimatasDEV.png?size=256"
          :roles="['Contributor']"
          :description="['Frequently Fixes Mixin Issues']"
          :socials="['https://github.com/TonimatasDEV','https://www.twitch.tv/tonimatasdev', 'https://www.youtube.com/channel/UCUB8iy2bYCvlF2JZBi3vTIw']"
      />
      <Member
          name="Almighty-Satan"
          image="https://github.com/Almighty-Satan.png?size=256"
          :alternate-names="[{icon: ['fab', 'discord'], name: 'buccy'}]"
          :roles="['Contributor']"
          :description="['Some Java Hacks for KettingLauncher']"
          :socials="['https://github.com/Almighty-Satan']"
      />
      <Member
          name="Malcolm"
          image="https://github.com/m1lc0lm.png?size=256"
          :description="['Some magic in MagmaLauncher']"
          :roles="['Contributor']"
          :socials="['https://github.com/m1lc0lm', 'https://www.twitch.tv/malcolm3000']"
      />
      <Member
          name="Larcek"
          :image="larcek"
          :alternate-names="[{icon: ['fab', 'github'], name: 'LarcekGiglamesh'}]"
          :roles="['Admin', 'Staff']"
          :description="['Provides Server for C0D3 M4513R']"
          :socials="['https://github.com/LarcekGiglamesh', 'https://www.twitch.tv/larcek']"
      />
      <Member
          name="DjJewl"
          :image="djjewl"
          :alternate-names="[{icon: ['fab', 'github'], name: 'wolflord212312'}]"
          :roles="['Staff']" :socials="['https://github.com/wolflord212312', 'https://www.youtube.com/channel/UCZGOR6R6054S8h3UYlG1eyg']"
      />
      <Member
          name="LeStegii"
          image="https://github.com/LeStegii.png?size=256"
          :roles="['Staff']"
          :socials="['https://github.com/LeStegii', 'https://www.twitch.tv/ueberallgebannt', 'https://www.youtube.com/channel/UCM9WaPEk7RclWZyyFcYRAwQ']"
      />
      <Member
          name="p0t4t0sandwich"
          image="https://github.com/p0t4t0sandwich.png?size=256"
          :alternate-names="[{icon: ['fab', 'discord'], name: 'ThePotatoKing'}]"
          :roles="['Staff']"
          :socials="['https://github.com/p0t4t0sandwich', 'https://www.twitch.tv/bob_and_sparkles', 'https://www.youtube.com/channel/UCB70eOPhOIWr7H-J58OZAZw']"
      />
      <Member
          name="Chris"
          :image="chris"
          :alternate-names="[{icon: ['fab', 'github'], name: 'Kit4444'}]"
          :roles="['Helper']"
          :socials="['https://github.com/Kit4444', 'https://www.twitch.tv/chriswille2856', 'https://www.youtube.com/channel/UCkTayY7PX4oV2DBABEaDQKQ']"
      />
      <Member
          name="Mattaous"
          image="https://github.com/Mattaous.png?size=256"
          :roles="['Helper']"
          :socials="['https://github.com/Mattaous', 'https://www.twitch.tv/mattaoustv', 'https://www.youtube.com/channel/UCvnxsFaR7JL3chGAGADurHA']"
      />
      <Member
          name="Soapy7261"
          image="https://github.com/Soapy7261.png?size=256"
          :roles="['Helper']"
          :socials="['https://github.com/Soapy7261']"
      />
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 20px auto;
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>