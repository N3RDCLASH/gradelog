<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          type="text"
          required
          placeholder="Enter First Name"
          class="form-input"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          type="text"
          required
          placeholder="Enter Last Name"
          class="form-input"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.birthDate"
          type="date"
          required
          placeholder="Enter Date of Birth"
          class="form-input"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.school"
          type="text"
          required
          placeholder="Enter School"
          class="form-input"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.fieldOfStudy"
          type="text"
          required
          placeholder="Enter Field of Study"
          class="form-input"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.class"
          type="text"
          required
          placeholder="Enter Class"
          class="form-input"
        ></b-form-input>
      </b-form-group>
      <b-button id="submit" type="submit" variant="warning" class="form-input">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import * as firebase from "firebase";
import store from "@/store/";
import "firebase/firestore";
import "firebase/auth";

export default {
  name: "UserInfoForm",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        birthDate: "",
        school: "",
        fieldOfStudy: "",
        class: ""
      }
    };
  },
  methods: {
    onSubmit(e) {
      const db = firebase.firestore();
      const auth = firebase.auth();
      e.preventDefault();
      let user = auth.currentUser;
      db.collection("users")
        .doc(user.uid)
        .update({ ...this.form, registerCompleted: true })
        .then(() => {
          store.commit("SET_REGISTER_STATUS", true);
          this.$router.push({ name: "Home" });
        })
        .catch(error => console.log(error));
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
.form-input-block {
  margin-top: 20px;
}
.form-input {
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