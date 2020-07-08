<template>
  <div>
    <SideBar/>
   <div class="main-panel">
       <top-navbar></top-navbar>
       <DashboardContent />
   </div>
  </div>
</template>

<script>
import SideBar from "../components/Sidebar/SideBar.vue";
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar'
export default {
    name:"DashboardLayout",
  components: {
    SideBar,
    TopNavbar,
    DashboardContent
  }
};
</script>

<style scoped>
.main-panel{
    position: relative;
    float: right;
    width: 100%;
    min-height: 100vh;
    padding-left:320px ;
    /* background: -webkit-gradient(linear,left top,left bottom,from(#1e1e2f),to(#1e1e24)); */
    /* background: linear-gradient(#1e1e2f,#1e1e24); */
    -webkit-transition: all .5s cubic-bezier(.685,.0473,.346,1);
    transition: all .5s cubic-bezier(.685,.0473,.346,1)
}
</style>