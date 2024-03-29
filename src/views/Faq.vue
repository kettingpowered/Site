<script setup>
import {useHead} from "@unhead/vue";

useHead({
  link: {
    rel: 'canonical',
    href: 'https://kettingpowered.org/faq'
  }
})
</script>

<script>
import UnderConstruction from "@/views/UnderConstruction.vue";

export default {
  name: "Faq",
  head() {
    return {
      title: this.unhead.formattedTitle("FAQ"),
      meta: [
        {
          property: 'og:title',
          content: this.unhead.formattedTitle("FAQ"),
        },
        {
          property: 'og:description',
          content: 'Ketting, A fork of MinecraftForge with added Bukkit & Spigot patches'
        },
        {
          property: 'og:image',
          content: this.global.imageUrl
        },
        {
          property: 'og:url',
          content: this.global.url + 'faq'
        },
      ]
    };
  },
  components: {
    UnderConstruction
  }
}
</script>

<template>
  <UnderConstruction />
</template>

<style scoped>

</style>