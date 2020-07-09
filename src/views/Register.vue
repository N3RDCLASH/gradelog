<template>
  <b-col md="4" sm="8" offset-md="4" offset-sm="2" align="left" class="login-form-container">
    <h1>Register</h1>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter Email"
          class="login-input"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password1"
          @change="validatePassword()"
          required
          placeholder="Enter Password"
          class="login-input"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3">
        <b-form-input
          id="input-3"
          type="password"
          v-model="form.password2"
          required
          placeholder="Re-enter Password"
          class="login-input"
        ></b-form-input>
      </b-form-group>

      <b-button id="submit" type="submit" variant="warning" class="login-input">Register</b-button>
    </b-form>
    <ul v-if="validations.lenght">
      <li>{{validations[0] ? '✔️' : '❌'}} must be at least 5 characters</li>
      <li>{{validations[1] ? '✔️' : '❌'}} must contain a capital letter</li>
      <li>{{validations[2] ? '✔️' : '❌'}} must contain a number</li>
      <li>{{validations[3] ? '✔️' : '❌'}} must contain one of $&+,:;=?@#</li>
    </ul>
  </b-col>
</template>

<script>
// @ is an alias to /src

import * as firebase from "firebase";
import "firebase/auth";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password1: "",
        password2: ""
      },
      validations: [],
      strength: 0,
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password);
        this.$router.replace({ name: "Home" });
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    validatePassword() {
      const password = this.form.password1;
      this.validations = [
        password.length > 5,
        password.search(/[A-Z]/) > -1,
        password.search(/[0-9]/) > -1,
        password.search(/[$&+,:;=?@#]/) > -1
      ];
      this.strength = this.validations.reduce((acc, cur) => acc + cur, 0);
      console.log(this.strengthgh,this.validations);
    }
  }
};
</script>

<style scoped>
.login-form-container {
  margin-top: 15vh;
  padding: 10px 10px 60px 10px;
  border-radius: 5px;
}
.login-input-block {
  margin-top: 20px;
}
.login-input {
  height: 46px;
  padding: 13px 12px;
}
#submit {
  width: 100%;
}
</style>