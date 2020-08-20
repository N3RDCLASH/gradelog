<template>
  <div class="text-black">
    <b-card no-body>
      <b-col md="2" class="controls">
        <b-select
          :options="schoolyears"
          v-model="selectedSchoolyear"
          @change="selectOption"
          class="mt-3 mb-3"
        ></b-select>
        <b-button v-b-modal.modal-1>
          Grade
          <b-icon icon="plus-circle-fill" variant="light" class="ml-2 mt-1"></b-icon>
        </b-button>
      </b-col>
      <b-tabs card>
        <b-tab title="Periode 1" active>
          <grades-tables :items="grades.period[1]" />
          <p v-if="grades.period[1].length === 0">No records found.</p>
        </b-tab>
        <b-tab title="Periode 2">
          <grades-tables :items="grades.period[2]" />
          <p v-if="grades.period[2].length === 0">No records found.</p>
        </b-tab>
        <b-tab title="Periode 3" active>
          <grades-tables :items="grades.period[3]" />
          <p v-if="grades.period[3].length === 0">No records found.</p>
        </b-tab>
        <b-tab title="Periode 4">
          <grades-tables :items="grades.period[4]" />
          <p v-if="grades.period[4].length === 0">No records found.</p>
        </b-tab>
      </b-tabs>
    </b-card>

    <div>
      <b-modal id="modal-1" title="BootstrapVue" hide-footer>
        <form action @submit="createGradeResult">
          <b-col md="10" offset-md="1" h-align="center">
            <b-form-group label="Subject Name">
              <b-input v-model="form.subject_name"></b-input>
            </b-form-group>
          </b-col>
          <b-col md="10" offset-md="1" h-align="center">
            <b-form-group label="Result Period">
              <b-select v-model="form.result_period">
                <b-select-option value="null" disabled>Select the result period</b-select-option>
                <b-select-option value="1">1</b-select-option>
                <b-select-option value="2">2</b-select-option>
                <b-select-option value="3">3</b-select-option>
                <b-select-option value="4">4</b-select-option>
              </b-select>
            </b-form-group>
          </b-col>
          <b-col md="10" offset-md="1" h-align="center">
            <b-form-group label="Result Date">
              <b-input v-model="form.result_date" type="date"></b-input>
            </b-form-group>
          </b-col>
          <b-col md="10" offset-md="1" h-align="center">
            <b-form-group label="Result Grade">
              <b-input v-model="form.result_grade" type="number" step=".01"></b-input>
            </b-form-group>
          </b-col>
          <b-col md="10" offset-md="1" h-align="center">
            <b-form-group label="Result Grade">
              <b-button type="submit" class="col-md">Create</b-button>
            </b-form-group>
          </b-col>
        </form>
      </b-modal>
    </div>
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
      form: {
        result_date: null,
        result_grade: 0,
        result_period: null,
        subject_name: "",
      },
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
      // Remove whitespace from string and parse as integer
      schoolyear = parseInt(schoolyear.split("-")[0].replace(/\s+/g, ""));

      // Remove whitespace from string
      this.clearGrades();

      firebase
        .firestore()
        .collection("results")
        .where("uid", "==", store.state.user.data.uid)
        .where("result_date", ">=", new Date(`10-01-${schoolyear}`))
        // TODO: this doesn't completly work yet;
        .where("result_date", "<=", new Date(`08-30-${schoolyear + 1}`))
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
      for (let start = 2017; start <= end; start++) {
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
    createGradeResult(e) {
      e.preventDefault();
      let { result_date } = this.form;
      firebase
        .firestore()
        .collection("results")
        .doc()
        .set({
          ...this.form,
          result_date: new Date(result_date),
          uid: store.state.user.data.uid,
        })
        .then((docRef) => {
          console.log(docRef);
        })
        .catch((err) => console.log(err));
      console.log(this.form);
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
.controls {
  float: right;
}
</style>