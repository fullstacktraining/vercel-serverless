<template>
  <div class="home">
    <transition name="slide-fade">
      <AddContact v-if="showForm" />
    </transition>
    <button
      class="rounded-full h-16 w-16 items-center justify-center bg-blue-400 shadow-xl hover:bg-blue-300 text-4xl font-bold"
      v-on:click="showForm = !showForm"
    >
      {{ !showForm ? '+' : '-' }}
    </button>
    <Contacts />
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue';
import AddContact from '@/components/AddContact.vue';

export default {
  name: 'Home',
  data: () => ({
    showForm: false
  }),
  components: {
    AddContact,
    Contacts
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-90px);
  opacity: 0;
}
</style>
