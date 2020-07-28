<template>
  <b-col md="4" offset-md="4">
    <h1>Select a year</h1>
    <b-list-group :key="year" v-for="year in years">
      <b-list-group-item :to="{name:'Grades',params:{year:year} }">{{year}}</b-list-group-item>
    </b-list-group>
  </b-col>
</template>

<script>
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

export default {
  data() {
    return { results: [], years: [] };
  },
  created() {
    firebase
      .firestore()
      .collection("results")
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then((results) => {
        this.results = results.docs.map((doc) => doc.data());
        this.years = [
          ...new Set(
            this.results.map((doc) => doc.result_date.toDate().getFullYear())
          ),
        ];
      });
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>