<script>
import DownloadButton from "@/components/download/DownloadButton.vue";

export default {
  name: "Download",
  components: {
    DownloadButton
  },
  data() {
    return {
      releases: [],
      orderedReleases: new Map(),
      loaded: false,
      errored: false,
      activeDetails: null
    };
  },
  methods: {
    async fetchReleases() {
      try {
        const response = await fetch(this.global.downloadUrl);
        if (!response.ok)
          throw new Error("Failed to fetch releases");

        const xml = await response.text();
        this.parseXML(xml);
        this.loaded = true;
      } catch (error) {
        console.error(error);
        this.errored = true;
      }
    },
    parseXML(xml) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "application/xml");
      const versions = doc.querySelectorAll("version");
      versions.forEach((version) => {
        this.releases.push(version.textContent);
      });
      this.sortReleases();
    },
    sortReleases() {
      this.releases.sort((a, b) => {
        const aParts = a.split(".");
        const bParts = b.split(".");
        for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
          const aPart = parseInt(aParts[i]);
          const bPart = parseInt(bParts[i]);
          if (aPart < bPart) return -1;
          if (aPart > bPart) return 1;
        }
        return aParts.length - bParts.length;
      });
      this.orderReleases();
    },
    orderReleases() {
      const versions = new Map();
      this.releases.forEach((release) => {
        if (!release.includes("-") || release.split('-').length < 3) {
          console.error("Invalid release: " + release);
          return;
        }
        const mcVersion = release.split("-")[0];
        if (!versions.has(mcVersion))
          versions.set(mcVersion, []);
        versions.get(mcVersion).unshift(release);
      });
      this.orderedReleases = versions;
    },
    getCompareVersion(versions, version) {
      const index = versions.indexOf(version);
      if (index === versions.length - 1)
        return null;
      return 'v' + versions[index + 1];
    },
    isLatestVersion(versions, version) {
      return versions[0] === version;
    },
    toggleDetails(version) {
      if (this.activeDetails === version)
        this.activeDetails = null;
      else
        this.activeDetails = version;
    },
    isDetailsActive(version) {
      return this.activeDetails === version;
    },
  },
  created() {
    this.fetchReleases();
  }
}
</script>

<template>
  <div id="content">
    <h1>Downloads</h1>
    <div id="loading" v-if="!loaded && !errored">Loading...</div>
    <div id="error" v-else-if="errored">Failed to load releases, check the console for more information</div>
    <div id="display" v-else>
      <div class="version-container" v-for="[mcVersion, versions] in orderedReleases">
        <h2 class="version-header">{{ mcVersion }}</h2>
        <div class="version-buttons">
          <DownloadButton
            v-for="version in versions"
            :key="version"
            :kettingVersion="version.split('-')[2]"
            :mcVersion="mcVersion"
            :version="'v' + version"
            :compareVersion="getCompareVersion(versions, version)"
            :detailsActive="isDetailsActive(version)"
            :latest="isLatestVersion(versions, version)"
            @toggle-details="toggleDetails(version)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#loading {
  font-size: 1.5em;
}

#error {
  font-size: 1.5em;
  color: red;
}

#display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.version-buttons {
  width: 50vw;
}

.version-header {
  font-size: 1.5em;
  margin: 0;
  text-align: center;
}
</style>