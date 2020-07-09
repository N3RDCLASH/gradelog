<template>
  <b-row>
    <b-col md=4 offset-md="4">
      <b-list-group>
        <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
        <b-list-group-item href="#" active>Link with active state</b-list-group-item>
        <b-list-group-item href="#">Action links are easy</b-list-group-item>
        <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
    
    mounted(){
        //TODO get data from firebase
    }
    };
</script>

<style lang="scss" scoped>
</style>