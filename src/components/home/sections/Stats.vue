<script>
import Stat from "@/components/Statistic.vue";

export default {
  components: {
    Stat
  },
  data() {
    return {
      openIssues: 0,
      closedIssues: 0,
      servers: 0,
      players: 0,
      loadingIssues: true,
      loadingBstats: true
    }
  },
  methods: {
    async fetchIssues() {
      this.loadingIssues = true;

      try {
        const openResponse = await fetch('https://api.github.com/search/issues?q=repo:kettingpowered/Ketting-1-20-x+type:issue+state:open&page=0&per_page=1');
        const openData = await openResponse.json();
        this.openIssues = openData.total_count;

        const closedResponse = await fetch('https://api.github.com/search/issues?q=repo:kettingpowered/Ketting-1-20-x+type:issue+state:closed&page=0&per_page=1');
        const closedData = await closedResponse.json();
        this.closedIssues = closedData.total_count;
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loadingIssues = false;
      }
    },
    async fetchBstats() {
      this.loadingBstats = true;

      try {
        const serversResponse = await fetch('https://bstats.org/api/v1/plugins/20485/charts/servers/data?maxElements=1');
        const serverData = await serversResponse.json();
        this.servers = serverData[0][1];

        const playersResponse = await fetch('https://bstats.org/api/v1/plugins/20485/charts/players/data?maxElements=1');
        const playerData = await playersResponse.json();
        this.players = playerData[0][1];
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loadingBstats = false;
      }
    }
  },
  mounted() {
    this.fetchIssues();
    this.fetchBstats();
  }
}
</script>

<template>
  <section class="stats">
    <div class="content">
      <div id="info">
        <h1>Stats</h1>
        <div id="stat-container">
          <Stat :title="`${openIssues} / ${closedIssues}`" description="Open / Closed issues" :loading="loadingIssues" :icon="['fab', 'github']"/>
          <Stat :title="servers" description="Servers" :loading="loadingBstats" :icon="['fas', 'server']"/>
          <Stat :title="players" description="Players" :loading="loadingBstats" :icon="['fas', 'users']"/>
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