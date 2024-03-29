<script>
import UnderConstruction from "@/views/UnderConstruction.vue";

export default {
  name: "Faq",
  head() {
    return {
      title: this.unhead.formattedTitle("FAQ"),
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