<template>
  <div>{{user}}</div>
</template>

<script>
import * as firebase from "firebase";
import store from "@/store/";
import "firebase/firestore";
export default {
  name: "Profile",
  data() {
    return {
      user: {}
    };
  },
  methods() {},
  created() {
    firebase
      .firestore()
      .collection("users")
      .doc(store.state.user.data.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log("not", store.state.user.data.uid);
        }
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>