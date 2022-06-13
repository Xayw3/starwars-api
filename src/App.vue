<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <router-link to="/">Peoples</router-link>
    <router-link to="/films">Films</router-link>
    <router-link to="/planets">Planets</router-link>
  </header>
  <section>
    <RouterView />
  </section>
</template>

<style>
@import "@/assets/base.css";

header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 15px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
