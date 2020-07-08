<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      class="vue-sidebar"
      bg-variant="success"
      text-variant="light"
      :visible="true"
      width="240"
      no-header
    >
      <template>
        <img width="250" src="../../assets/logo.png" alt />
        <div class="p-3">
          <nav class="mb-3 text-left text-light">
            <b-nav vertical>
              <b-nav-item active href="/home">Dashboard</b-nav-item>
              <b-nav-item href="/grades">Grades</b-nav-item>
              <b-nav-item href>Subjects</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style scoped>
#sidebar-no-header > div > div > nav > ul > li > a {
  color: white !important;
}
.b-sidebar {
  background: linear-gradient(0deg, #389466, #42b883) !important;
}
</style>