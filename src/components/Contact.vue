<template>
    <div class="contact-page">
      <h1>✉️  Contact</h1>
      <p class="email-subtitle">CandaceAmberAndrews@gmail.com</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>

        <div class="form-group message">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" rows="12" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
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
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  /* background-color: rgb(252, 218, 224);  */
  background-color: #a3c1b0;
  padding: 20px;
  border-radius: 8px;
}

.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17px;
}

.form-group label {
  font-weight: bold;
  margin: 10px 5px 2px 0px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
}

.form-group.message {
  flex-direction: column;
  margin-top: 10px;
}

h1 {
    margin-top: 52px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
}

button {
  /* background-color: #5f907b; */
  background-color: rgb(66, 81, 74);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 40%;
  margin: 0 auto;
}

</style>