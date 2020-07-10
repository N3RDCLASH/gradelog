<template>
  <b-col md="4" sm="8" offset-md="4" offset-sm="2" align="left" class="login-form-container">
    <img id="logo" width="350px" class="align-h-center" src="../assets/logo-dark.png" />
    <h1>Register</h1>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label-for="input-1">
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
          @input="validatePassword"
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
          @input="validatePassword"
          required
          placeholder="Re-enter Password"
          class="login-input"
        ></b-form-input>
      </b-form-group>

      <b-button id="submit" type="submit" variant="warning" class="login-input">Register</b-button>
      <p>
        Already haven account?
        <a href="/login">Login</a>
      </p>
    </b-form>
    <ul class="validations" v-if="validations.length">
      <li>{{validations[0] ? '✔️' : '❌'}} must be at least 8 characters</li>
      <li>{{validations[1] ? '✔️' : '❌'}} must contain a capital letter</li>
      <li>{{validations[2] ? '✔️' : '❌'}} must contain a number</li>
      <li>{{validations[3] ? '✔️' : '❌'}} must contain one of $&+,:;=?@#</li>
      <li>{{validations[4] ? '✔️' : '❌'}} passwords match</li>
    </ul>
  </b-col>
</template>

<script>
// @ is an alias to /src

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
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
      if (this.strength === this.validations.length) {
        try {
          const user = firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.form.email,
              this.form.password1
            )
            .then(() => {
              let db = firebase.firestore();
              const {
                uid,
                email,
                displayName,
                photoURL
              } = firebase.auth().currentUser;
              const user = { uid, email, displayName, photoURL };
              console.log(db, user);
              db.collection("users")
                .doc(user.uid)
                .set(user)
                .then(() => {
                  console.log("user updated!");
                });
              // we can also use `$firestoreRefs.user` to refer to the bound user reference
              // this.$firestoreRefs.user.set(user);
            })
            .then(() => this.$router.replace({ name: "Home" }));
          console.log(user);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("test");
      }
    },
    validatePassword() {
      const password1 = this.form.password1;
      const password2 = this.form.password2;
      this.validations = [
        password1.length > 8,
        password1.search(/[A-Z]/) > -1,
        password1.search(/[0-9]/) > -1,
        password1.search(/[$&+,:;=?@#]/) > -1,
        password1 === password2
      ];
      this.strength = this.validations.reduce((acc, cur) => acc + cur, 0);
      console.log(this.strength, this.validations);
    }
  }
};
</script>

<style scoped>
#logo {
  margin: 20px auto;
  display: block;
}
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
.validations {
  margin-top: 30px;
}
</style>