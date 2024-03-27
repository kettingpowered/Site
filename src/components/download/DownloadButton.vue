<script>
export default {
  name: "DownloadButton",
  props: {
    kettingVersion: {
      type: String,
      required: true
    },
    mcVersion: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    },
    compareVersion: {
      type: String,
      required: true
    },
    detailsActive: {
      type: Boolean,
      required: true
    },
    latest: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    buttonBorderRadius() {
      return this.detailsActive ? "15px 15px 0 0" : "15px";
    }
  }
}
</script>

<template>
  <div id="button-container">
    <div id="button" :style="{ borderRadius: buttonBorderRadius }">
      <p id="version">{{ kettingVersion }}</p>
      <div id="right">
        <a id="compare" v-if="compareVersion != null" :href="global.softwareUrl() + 'compare/' + compareVersion + '...' + version" target="_blank">What's new?</a>
        <p id="get" @click="this.$emit('toggle-details')">Get it</p>
      </div>
    </div>
    <div id="details" v-if="detailsActive">
      <h2>How to install</h2>
      <p>Step 1: Download <a :href="global.githubUrl + 'kettinglauncher/releases'" target="_blank">kettinglauncher</a>.</p>
      <p>Step 2: Make a new folder and put the downloaded file in it.</p>
      <p>Step 3: Open a terminal of choice and execute the following command:</p>
      <div>
        <div id="terminal">
          <p>cd path/to/folder</p>
          <p>java -jar kettinglauncher-X.X.X.jar -minecraftVersion {{ mcVersion + (latest ? '' : ' -kettingVersion ' + kettingVersion) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-background-soft);
  padding: 7px 0;
  margin: 10px 0;
}

#version {
  font-size: 1.5em;
  margin-left: 10px;
}

#right {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
}

#compare,
#get {
  border-radius: 15px;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
}

#compare {
  font-size: 1em;
  margin-right: 25px;
  padding: 1px 10px;
  background-color: var(--color-background-mute);
}
#compare:hover {
  background-color: var(--color-background-soft);
}

#get {
  font-size: 1.2em;
  margin-right: 10px;
  padding: 2px 10px;
  background-color: var(--color-background-mute);
}
#get:hover {
  background-color: var(--color-background-soft);
}

#details {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-soft);
  border-radius: 0 0 15px 15px;
  padding: 7px 10px;
  margin: -10px 0 10px 0;
}

#details a {
  color: var(--color-link-secondary);
}
#details a:hover {
  text-decoration: underline;
  color: var(--color-link-secondary-hover);
}

#terminal {
  display: inline-block;
  white-space: nowrap;
  background-color: #111;
  color: #fff;
  font: 1em monospace;
  line-height: 1.5em;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
}
</style>