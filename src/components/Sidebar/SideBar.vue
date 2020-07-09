<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      class="vue-sidebar"
      bg-variant="success"
      text-variant="light"
      :visible="visible"
      no-header
      no-close-on-esc
      :no-close-on-route-change="true"
    >
      <template>
        <img width="250" src="../../assets/logo.png" alt />
        <div class="p-3">
          <nav class="mb-3 text-left text-light">
            <b-nav vertical>
              <b-nav-item active :to="{name:'Home'}">Dashboard</b-nav-item>
              <b-nav-item :to="{name:'Results'}">Results</b-nav-item>
              <b-nav-item :to="{name:'Subjects'}">Subjects</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
#sidebar-no-header > div > div > nav > ul > li > a {
  padding: 15px 0;
  color: white !important;
}
#sidebar-no-header > div > div > nav > ul > li :hover {
  /* background: #41b75c; */
  /* width: 100%; */
}
#sidebar-no-header > div.b-sidebar-body {
  background: linear-gradient(0deg, #389466, #42b883) !important;
}
</style>