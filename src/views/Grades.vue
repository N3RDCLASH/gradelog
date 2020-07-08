<template>
  <div class="text-black">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Tab 1" active>
          <grades-tables />
        </b-tab>
        <b-tab title="Tab 2">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import GradesTables from '../components/Tables/GradesTables'
export default {
    components:{
        GradesTables
    }
};
</script>

<style  scoped>
* {
  color: black;
}
</style>