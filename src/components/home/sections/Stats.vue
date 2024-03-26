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
      loadingBstats: true,
      loadingIssuesError: false,
      loadingBstatsError: false
    }
  },
  methods: {
    async fetchIssues() {
      this.loadingIssues = true;

      try {
        const openResponse = await fetch('https://api.github.com/search/issues?q=repo:kettingpowered/Ketting-1-20-x+type:issue+state:open&page=0&per_page=1');
        if (!openResponse.ok)
          throw new Error('Network response was not ok, status: ' + openResponse.status);

        const openData = await openResponse.json();
        this.openIssues = openData.total_count;

        const closedResponse = await fetch('https://api.github.com/search/issues?q=repo:kettingpowered/Ketting-1-20-x+type:issue+state:closed&page=0&per_page=1');
        if (!closedResponse.ok)
          throw new Error('Network response was not ok, status: ' + closedResponse.status);

        const closedData = await closedResponse.json();
        this.closedIssues = closedData.total_count;
      } catch (error) {
        console.error('Error:', error);
        this.loadingIssuesError = true;
      } finally {
        this.loadingIssues = false;
      }
    },
    async fetchBstats() {
      this.loadingBstats = true;

      try {
        const serversResponse = await fetch('https://bstats.org/api/v1/plugins/20485/charts/servers/data?maxElements=1');
        if (!serversResponse.ok)
          throw new Error('Network response was not ok, status: ' + serversResponse.status);

        const serverData = await serversResponse.json();
        this.servers = serverData[0][1];

        const playersResponse = await fetch('https://bstats.org/api/v1/plugins/20485/charts/players/data?maxElements=1');
        if (!playersResponse.ok)
          throw new Error('Network response was not ok, status: ' + playersResponse.status);

        const playerData = await playersResponse.json();
        this.players = playerData[0][1];
      } catch (error) {
        console.error('Error:', error);
        this.loadingBstatsError = true;
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
          <Stat :title="`${openIssues} / ${closedIssues}`" description="Open / Closed issues" :loading="loadingIssues" :error="loadingIssuesError" :icon="['fab', 'github']"/>
          <Stat :title="servers" description="Servers" :loading="loadingBstats" :error="loadingBstatsError" :icon="['fas', 'server']"/>
          <Stat :title="players" description="Players" :loading="loadingBstats" :error="loadingBstatsError" :icon="['fas', 'users']"/>
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