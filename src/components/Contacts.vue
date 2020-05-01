<template>
  <div>
    <div
      class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 text-center"
      v-if="loader"
    ></div>
    <table class="table-fixed" v-if="!loader">
      <thead>
        <tr>
          <th class="w-1/4 px-4 py-2">Name</th>
          <th class="w-1/6 px-4 py-2">Phone</th>
          <th class="w-1/4 px-4 py-2">Email</th>
          <th class="w-1/6 px-4 py-2">Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact._id">
          <td class="border px-4 py-2">
            <router-link :to="contact._id" class="hover:underline">{{
              contact.name
            }}</router-link>
          </td>
          <td class="border px-4 py-2">{{ contact.phone }}</td>
          <td class="border px-4 py-2">{{ contact.email }}</td>
          <td class="border px-4 py-2">
            <cld-image
              :publicId="contact.photo"
              width="100"
              height="100"
              radius="max"
              crop="thumb"
              gravity="face"
              secure="true"
              quality="auto"
              fetchFormat="auto"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data: () => ({
    contacts: [],
    loader: true
  }),
  methods: {
    async getContacts() {
      try {
        const response = await fetch('/api/contacts');
        const contacts = (await response.json()).data;
        this.contacts = contacts;
      } catch (error) {
        console.error('Error occured', error);
      } finally {
        this.loader = false;
      }
    }
  },
  mounted() {
    this.getContacts();
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
