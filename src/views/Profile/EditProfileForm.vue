<template>
  <b-card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <b-form-group id="input-group-1" label="First Name" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="First Name..."
            v-model="form.firstName"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 px-md-1">
        <b-form-group id="input-group-1" label="Last Name" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            required
            placeholder="Last Name..."
            v-model="form.lastName"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 px-md-1">
        <b-form-group id="input-group-1" label="Birth Date" label-for="input-7">
          <b-form-input
            id="input-7"
            type="date"
            required
            placeholder="Last Name..."
            v-model="form.birthDate"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-12 pl-md-1">
        <b-form-group id="input-group-1" label="Email" label-for="input-3">
          <b-form-input
            id="input-3"
            type="email"
            required
            placeholder="Enter Email..."
            v-model="form.email"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <b-form-group id="input-group-1" label="School" label-for="input-4">
          <b-form-input
            id="input-4"
            type="text"
            required
            placeholder="School"
            v-model="form.school"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 pl-md-1">
        <b-form-group id="input-group-1" label="Field Of Study" label-for="input-5">
          <b-form-input
            id="input-5"
            type="text"
            required
            placeholder="Enter Field of study"
            v-model="form.fieldOfStudy"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 pl-md-1">
        <b-form-group id="input-group-1" label="Class" label-for="input-6">
          <b-form-input
            id="input-6"
            type="text"
            required
            placeholder="Enter Class"
            v-model="form.class"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8"></div>
    </div>
    <b-button slot="footer" type="primary" fill @click="updateUserFormData">Save</b-button>
  </b-card>
</template>
<script>
import * as firebase from "firebase";
import "firebase/firestore";
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    updateUserFormData() {
      let updateComfirm = confirm(
        "Are you sure you want to update the information?"
      );
      if (updateComfirm) {
        firebase
          .firestore()
          .collection("users")
          .doc(this.model.uid)
          .update({ ...this.form, birthDate: new Date(this.form.birthDate) })
          .then((variant = "success") => {
            this.$bvToast.toast("User Data Updated!", {
              title: `Variant ${variant || "default"}`,
              variant: variant,
              solid: true,
            });
          })
          .catch((err) => console.log(err));
      }
    },
  },
  created() {
    this.form = {
      ...this.model,
      // TODO: Fix date on form
      // birthDate: new firebase.firestore.Timestamp(this.model.birthDate)
  
    };
  },
};
</script>
<style>
</style>
