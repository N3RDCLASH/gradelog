<template>
  <div>
    <b-table striped hover :fields="fields" :items="items"></b-table>
  </div>
</template>

<script>
export default {
  props: { items: Array, fields: Array },
  data() {
    return {
      // Test data
      // TODO make a created or mounted method that gets data from firebase
      // items: [
      //   // { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      //   // { age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   // { age: 89, first_name: "Geneva", last_name: "Wilson" },
      //   // { age: 38, first_name: "Jami", last_name: "Carney" },
      // ],
    };
  },
};
</script>