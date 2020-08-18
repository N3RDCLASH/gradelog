<template>
  <div class="text-black">
    <b-card no-body>
      <div>
        <b-form>
          <b-select :options="schoolyears"></b-select>
        </b-form>
      </div>
      <b-tabs card>
        <b-tab title="Periode 1" active>
          <grades-tables :items="grades.period[1]" />
        </b-tab>
        <b-tab title="Periode 2">
          <grades-tables :items="grades.period[2]" />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import GradesTables from "@/components/Tables/GradesTables";
import store from "@/store";
import * as firebase from "firebase/app";
import "firebase/firestore";

export default {
  components: {
    GradesTables,
  },
  props: ["year"],
  data() {
    return {
      schoolyears: [],
      grades: {
        period: {
          1: [],
          2: [],
          3: [],
          4: [],
        },
      },
    };
  },
  methods: {
    getGrades() {
      firebase
        .firestore()
        .collection("results")
        .where("uid", "==", store.state.user.data.uid)
        .get()
        .then((results) => {
          if (results.empty != true) {
            let grades = results.docs.map((doc) => doc.data());
            grades.forEach((doc) => {
              let {
                subject_name,
                result_grade,
                result_period,
                result_date,
              } = doc;
              this.grades.period[result_period].push({
                subject_name,
                result_grade,
                result_date: result_date.toDate().toDateString(),
              });
            });
          }
        });
    },
    generateSelectOptions() {
      let end = new Date().getFullYear();
      for (let start = 2010; start <= end; start++) {
        this.schoolyears.push({
          value: `${start}-${start + 1}`,
          text: `${start}-${start + 1}`,
        });
      }
    },
  },
  created() {
    this.getGrades();
    this.generateSelectOptions();
  },
};
</script>

<style  scoped>
* {
  color: black;
}
</style>