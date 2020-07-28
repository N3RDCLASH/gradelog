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

<script>
import * as firebase from "firebase";
import store from "@/store/";
import "firebase/firestore";
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
    let { uid } = store.state.user.data;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.user = doc.data();
          // console.log(tdoc.data());
        } else {
          console.log("not", uid);
        }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
</style>