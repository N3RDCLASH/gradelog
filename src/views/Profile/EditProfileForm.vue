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
            v-model="model.firstName"
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
            v-model="model.lastName"
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
            v-model="model.birthDate"
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
            v-model="model.email"
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
            v-model="model.school"
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
            v-model="model.fieldOfStudy"
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
            v-model="model.class"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8"></div>
    </div>
    <b-button slot="footer" type="primary" fill>Save</b-button>
  </b-card>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style>
</style>
