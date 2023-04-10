<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <div id="flashMessage" v-if="GStore.flashMessage">
          {{ GStore.flashMessage }}
        </div>
        <nav>
          <RouterLink :to="{name: 'event-list'}">Events</RouterLink> |
          <RouterLink :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <h1>Event for good</h1>
    <RouterView />
  </div>
</template>

<script>
export default{
  inject: ['GStore']
}
</script>

<style scoped>
@keyframes yellowfade {
  from {
    background: greenyellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
