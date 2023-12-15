<template>
    <div class="contact-page">
      <h1>Contact Page</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>

        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      async submitForm() {
        try{
          const response = await this.$axios.post('https://formspree.io/f/xgejpobz', this.formData);
          console.log(response);
        } catch (error) {
          console.log(error);
        };
      },
    },
  };
  </script>
  
  <style scoped>
 h1 {
    margin-top: 52px;
}
  </style>
  