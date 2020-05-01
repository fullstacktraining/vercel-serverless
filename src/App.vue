<template>
  <div id="app">
    <nav class="bg-white px-8 font-light pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <router-link
          class="border-b-2 border-transparent uppercase tracking-wide py-3 mr-8 hover:underline"
          to="/"
          >Home</router-link
        >
        <router-link
          class="border-b-2 border-transparent uppercase tracking-wide py-3 mr-8 hover:underline"
          to="/about"
        >
          About
        </router-link>
      </div>
    </nav>
    <main class="m-5">
      <router-view />
    </main>
  </div>
</template>
<style scoped>
.active {
  @apply underline;
}
</style>
