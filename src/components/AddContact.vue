<template>
  <div>
    <div
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
      v-if="success"
    >
      <span class="block sm:inline">Contact added</span>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="inline-full-name"
        >
          Full Name
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
          id="inline-full-name"
          type="text"
          placeholder="Jane Doe"
          v-model="name"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="inline-phone-number"
        >
          Phone number
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
          id="inline-phone-number"
          type="text"
          placeholder="111-222-3344"
          v-model="phone"
        />
      </div>
      <div class="mb-8">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="inline-email"
        >
          Email
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
          id="inline-email"
          type="email"
          placeholder="user@example.org"
          v-model="email"
        />
      </div>
      <div class="flex items-center mb-10">
        <button
          class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          @click="openWidget"
        >
          Upload photo
        </button>
        <span class="p-2" v-if="photo_id">Photo ID: {{ photo_id }}</span>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          @click="addContact"
        >
          Add contact
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddContact',
  data: () => ({
    name: '',
    phone: '',
    email: '',
    success: false,
    photo_id: ''
  }),
  methods: {
    openWidget: function() {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: '', // add your Cloudinary username
          uploadPreset: '', // add an UNSIGNED upload preset
          sources: ['local']
        },
        this.updateHandler
      );
      myWidget.open();
    },
    updateHandler(error, result) {
      if (!error && result && result.event === 'success') {
        this.photo_id = result.info.public_id;
      }
    },
    addContact: async function() {
      const payload = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        photo: this.photo_id
      };

      this.success = await fetch('/api/add', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    }
  }
};
</script>
