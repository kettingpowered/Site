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
        /*const response = await fetch("https://nexus.c0d3m4513r.com/repository/Ketting-Server-Releases/org/kettingpowered/server/forge/maven-metadata.xml");
        if (!response.ok)
          throw new Error("Failed to fetch releases");

        const xml = await response.text();*/

        const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<metadata>\n' +
            '  <groupId>org.kettingpowered.server</groupId>\n' +
            '  <artifactId>forge</artifactId>\n' +
            '  <versioning>\n' +
            '    <latest>1.20.1-47.2.20-0.2.4</latest>\n' +
            '    <release>1.20.1-47.2.20-0.2.4</release>\n' +
            '    <versions>\n' +
            '      <version>1.20.1-47.2.20-0.0.1</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.2</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.3</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.4</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.5</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.6</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.7</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.8</version>\n' +
            '      <version>1.20.1-47.2.20-0.0.9</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.0</version>\n' +
            '      <version>1.20.2-48.1.0-0.0.1</version>\n' +
            '      <version>1.20.2-48.1.0-0.0.2</version>\n' +
            '      <version>1.20.2-48.1.0-0.0.3</version>\n' +
            '      <version>1.20.3-49.0.2-0.0.1</version>\n' +
            '      <version>1.20.4-49.0.19-0.0.1</version>\n' +
            '      <version>1.20.4-49.0.19-0.0.2</version>\n' +
            '      <version>1.20.4-49.0.19-0.0.3</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.1</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.2</version>\n' +
            '      <version>1.20.4-49.0.27-0.0.6</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.3</version>\n' +
            '      <version>1.20.4-49.0.27-0.0.7</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.4</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.5</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.6</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.7</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.8</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.9</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.10</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.11</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.12</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.13</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.14</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.15</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.16</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.17</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.18</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.19</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.20</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.21</version>\n' +
            '      <version>1.20.2-48.1.0-0.0.4</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.22</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.23</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.24</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.25</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.26</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.27</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.28</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.29</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.30</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.31</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.32</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.33</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.34</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.35</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.36</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.37</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.38</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.39</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.40</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.41</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.42</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.43</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.44</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.45</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.46</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.47</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.48</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.49</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.50</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.51</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.52</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.53</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.54</version>\n' +
            '      <version>1.20.1-47.2.20-0.1.55</version>\n' +
            '      <version>1.20.1-47.2.20-0.2.0</version>\n' +
            '      <version>1.20.2-48.1.0-0.2.0</version>\n' +
            '      <version>1.20.4-49.0.38-0.1.0</version>\n' +
            '      <version>1.20.1-47.2.20-0.2.1</version>\n' +
            '      <version>1.20.2-48.1.0-0.2.1</version>\n' +
            '      <version>1.20.4-49.0.38-0.1.1</version>\n' +
            '      <version>1.20.1-47.2.20-0.2.2</version>\n' +
            '      <version>1.20.2-48.1.0-0.2.2</version>\n' +
            '      <version>1.20.4-49.0.38-0.1.2</version>\n' +
            '      <version>1.20.4-49.0.38-0.1.3</version>\n' +
            '      <version>1.20.2-48.1.0-0.2.3</version>\n' +
            '      <version>1.20.1-47.2.20-0.2.3</version>\n' +
            '      <version>1.20.1-47.2.20-0.2.4</version>\n' +
            '    </versions>\n' +
            '    <lastUpdated>20240326222838</lastUpdated>\n' +
            '  </versioning>\n' +
            '</metadata>\n'

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