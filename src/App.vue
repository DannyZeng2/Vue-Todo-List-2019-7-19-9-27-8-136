<template>
  <div id="app">
    <div class="mainbox">
      <h2>Jquery To Do List</h2>
      <p>Simple Todo List with adding and filter by diff status</p>
      <AddItem></AddItem>
    </div>
  </div>
</template>

<script>
import AddItem from "./components/AddItem";
export default {
  name: 'app',
  components: {
      AddItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display:block;
  color: #2c3e50;
}
</style>
