<template>
  <div class="flex">
    <div
      class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 text-center"
      v-if="loader"
    ></div>
    <div
      class="flex flex-col justify-center bg-grey-lighter shadow-lg"
      v-if="!loader"
    >
      <cld-image
        :publicId="contact.photo"
        width="500"
        crop="scale"
        secure="true"
        quality="auto"
        fetchFormat="auto"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ contact.name }}</div>
        <p class="text-gray-700 text-base">
          Tel: {{ contact.phone }}<br />
          E-mail: {{ contact.email }}<br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    contact: {},
    loader: true
  }),
  methods: {
    async getContact() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(`/api/${id}`);
        const contact = (await response.json()).data;
        this.contact = contact;
      } catch (error) {
        console.error('Error occured', error);
      } finally {
        this.loader = false;
      }
    }
  },
  mounted() {
    this.getContact();
  }
};
</script>
<style scoped>
table tbody tr:nth-child(2n) {
  @apply bg-blue-100;
}
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
