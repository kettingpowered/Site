<script>
export default {
  name: "Logo"
}
</script>

<template>
  <div class="logo">
    <img class="logo-img" src="@/assets/ketting.webp" alt="Ketting logo">
    <h2 class="logo-header">Ketting</h2>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  user-select: none;
}

.logo-img {
  width: 1.5rem;
  height: 1.5rem;
}

.logo-header {
  font-size: 1.5rem;
  margin-left: 3px;

  background: linear-gradient(45deg, #901c6e, #62869d, #ea6e19, #fae033, #f2c6a4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>