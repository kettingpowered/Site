<script>
import DownloadButton from "@/components/download/DownloadButton.vue";
import {XMLParser} from "fast-xml-parser";

export default {
  name: "Download",
  components: {
    DownloadButton
  },
  data() {
    return {
      releases: [],
      orderedReleases: new Map(),
      selectedRelease: null,
      loaded: false,
      errored: false,
      activeDetails: null
    };
  },
  methods: {
    async fetchReleases() {
      const response = await fetch(this.global.downloadUrl);
      if (!response.ok)
        throw new Error("Failed to fetch releases");
      //Don't catch error. We Pre-Generate the Site on the server, so this is thrown build time.

      const xml = await response.text();
      this.parseXML(xml);
      this.loaded = true;
    },
    parseXML(xml) {
      const parser = new XMLParser();
      const doc = parser.parse(xml);
      // noinspection JSUnresolvedReference
      this.releases = doc.metadata.versioning.versions.version;
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
      this.selectedRelease = this.releases[0].split('-')[0];
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
    setSelectedRelease(version) {
      this.selectedRelease = version;
    }
  },
  async created() {
    await this.fetchReleases();
  },
  computed: {
    filteredReleases() {
      return new Map([[this.selectedRelease, this.orderedReleases.get(this.selectedRelease)]]);
    },
    buttonBgPos() {
      const selectedIndex = Array.from(this.orderedReleases.keys()).indexOf(this.selectedRelease);
      return `calc(${selectedIndex} * (100% / ${this.orderedReleases.size}))`;
    },
    buttonBgWidth() {
      return `calc(100% / ${this.orderedReleases.size})`;
    }
  }
}
</script>

<template>
  <div id="content">
    <h1>Downloads</h1>
    <div id="loading" v-if="!loaded && !errored">Loading...</div>
    <div id="error" v-else-if="errored">Failed to load releases, check the console for more information</div>
    <div id="display" v-else>
      <div class="version-container" v-for="[mcVersion, versions] in filteredReleases">
        <div class="switch">
          <div class="option" v-for="version in orderedReleases.keys()" :key="version" :class="{ 'selected': selectedRelease === version }" @click="setSelectedRelease(version)">{{ version }}</div>
          <div class="background" :style="{ left: buttonBgPos, width: buttonBgWidth }"></div>
        </div>
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
  margin: 20px 0;
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

.switch {
  position: relative;
  display: flex;
  width: 20vw;
  margin-left: auto;
  background-color: var(--color-background-mute);
  border-radius: 14px;
  border: 2px solid var(--color-background-mute);
}

.option {
  color: var(--color-text);
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 3px;
  transition: color 0.3s;
  z-index: 1;
  user-select: none;
}

.option.selected {
  color: var(--color-link-secondary);
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--color-background-soft);
  border-radius: 12px;
  transition: left 0.3s ease, width 0.3s ease;
}

.version-buttons {
  width: 50vw;
}

@media (max-width: 1000px) {
  .switch {
    width: 40vw;
  }

  .version-buttons {
    width: 80vw;
  }
}

@media (max-width: 550px) {
  .switch {
    width: 60vw;
  }

  .version-buttons {
    width: 90vw;
  }
}
</style>