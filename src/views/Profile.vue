<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="user"></edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>

// <script>
// import * as firebase from "firebase";
// import "firebase/firestore";
import store from "@/store/";
import EditProfileForm from "./Profile/EditProfileForm";
import UserCard from "./Profile/UserCard";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  name: "Profile",
  data() {
    return {
      user: {},
    };
  },
  methods: {},
  created() {
    store.watch(() => {
      this.user = this.$store.state.user.data; // could also put a Getter here
    });
    // TODO move this to the store and wait for snapshots instead of reading everytime
  },
};
</script>

<style scoped>
</style>