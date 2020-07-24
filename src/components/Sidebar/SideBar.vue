<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      class="vue-sidebar"
      bg-variant="dark"
      text-variant="dark"
      :visible="visible"
      no-header
      no-close-on-esc
      :no-close-on-route-change="true"
    >
      <template>
        <img height="54px" class src="../../assets/logo.png" alt />
        <div class="sidebar-wrapper bg-warning">
          <div class="p-3">
            <nav class="mb-3 text-left text-dark">
              <b-nav class="text-dark" vertical>
                <b-nav-item active :to="{name:'Home'}">
                  <b-icon icon="pie-chart" class="mr-2"></b-icon>Dashboard
                </b-nav-item>
                <b-nav-item :to="{name:'Results'}">
                  <b-icon icon="clipboard-data" class="mr-2"></b-icon>Results
                </b-nav-item>
                <b-nav-item :to="{name:'Subjects'}">
                  <b-icon icon="card-list" class="mr-2"></b-icon>Subjects
                </b-nav-item>
              </b-nav>
            </nav>
          </div>
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
.sidebar-wrapper {
  color: white !important;
  padding: 3%;
  height: calc(100% - 54px);
  margin: 0 auto;
  width: 230px;
  border-radius: 1%;
}

li > a {
  color: white;
}

.nav-item {
  margin-top: 10px;
}

#sidebar-no-header > div > div > nav > ul > li > a {
  padding: 15px 0;
  color: black !important;
  position: fixed;
}

#sidebar-no-header > div.b-sidebar-body {
  background: linear-gradient(0deg, #389466, #42b883) !important;
}
</style>