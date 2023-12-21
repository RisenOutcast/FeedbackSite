<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <header>
  </header>

  <body>
    <RouterView />
  </body>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  display: sticky;
}

body {
  max-width: 85rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #191919;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
