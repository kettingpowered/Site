<script>
import Stat from "@/components/Statistic.vue";

export default {
  components: {
    Stat
  }
}
</script>

<template>
  <section class="stats">
    <div class="content">
      <div id="info">
        <h1>Stats</h1>
        <div id="stat-container">
          <Stat title="2 / 100" description="Open / Closed issues" :icon="['fab', 'github']"/>
          <Stat title="12" description="Servers" :icon="['fas', 'server']"/>
          <Stat title="20" description="Players" :icon="['fas', 'users']"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#stat-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>