<template>
  <div class="wrapper">
    <SideBar />
      <top-navbar></top-navbar>
    <div class="main-panel">
      <DashboardContent />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Sidebar/SideBar.vue";
import DashboardContent from "./Content.vue";
import TopNavbar from "./TopNavbar";
export default {
  name: "DashboardLayout",
  components: {
    SideBar,
    TopNavbar,
    DashboardContent
  }
};
</script>

<style scoped>
.main-panel {
  position: relative;
  float: right;
  width: 100%;
  min-height: 100vh;
  padding: 30px 30px 30px 350px;
  /* background: -webkit-gradient(linear,left top,left bottom,from(#1e1e2f),to(#1e1e24)); */
  /* background: linear-gradient(#1e1e2f,#1e1e24); */
  -webkit-transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
  transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}
</style>