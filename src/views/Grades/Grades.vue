<template>
  <div class="text-black">
    <b-card no-body>
      <b-col md="2">
        <b-select
          :options="schoolyears"
          v-model="selectedSchoolyear"
          @change="selectOption"
          class="mt-3 mb-3"
        ></b-select>
        <b-button>
          Grade
          <b-icon icon="plus-circle-fill" variant="light" class="ml-2 mt-1"></b-icon>
        </b-button>
      </b-col>
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
      errors: [],
      schoolyears: [
        {
          value: null,
          text: "Schoolyear",
          disabled: true,
          selected: true,
        },
      ],
      selectedSchoolyear: null,
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
    getGradesBySchoolyear(schoolyear) {
      // Remove whitespace from string
      schoolyear = schoolyear.split("-")[0].replace(/\s+/g, "");

      // Remove whitespace from string
      this.clearGrades();

      firebase
        .firestore()
        .collection("results")
        .where("uid", "==", store.state.user.data.uid)
        .where("result_date", ">=", new Date(`10-01-${schoolyear}`))
        // TODO: this doesn't completly work yet;
        // .where("result_date", "<=", new Date(`08-30-${schoolyear + 1}`))
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
          } else {
            let error = "No records found";
            this.errors.push(error);
          }
        });
    },

    generateSelectOptions() {
      // push the placeholder to the array
      this.schoolyears.push();

      let end = new Date().getFullYear();
      for (let start = 2010; start <= end; start++) {
        this.schoolyears.push({
          value: `${start} - ${start + 1}`,
          text: `${start} - ${start + 1}`,
        });
      }
    },
    selectOption() {
      console.log("test");
      this.getGradesBySchoolyear(this.selectedSchoolyear);
    },
    clearGrades() {
      // Remove previous grades from array
      this.grades.period[1] = [];
      this.grades.period[2] = [];
      this.grades.period[3] = [];
      this.grades.period[4] = [];
    },
  },
  created() {
    this.generateSelectOptions();
    // this.getGradesBySchoolyear();
  },
};
</script>

<style  scoped>
* {
  /* color: black; */
}
</style>