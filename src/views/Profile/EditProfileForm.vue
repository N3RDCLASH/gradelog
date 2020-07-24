<template>
  <b-card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-3 px-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 pl-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-6 pl-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 px-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4 pl-md-1">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter First Name"
            class="form-input"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8"></div>
    </div>
    <base-button slot="footer" type="primary" fill>Save</base-button>
  </b-card>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style>
</style>
