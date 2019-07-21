<template>
  <div id="app">
    <div class="rootdiv">
      <h2>Jquery To Do List</h2>
      <p>Simple Todo List with adding and filter by diff status</p>
      <AddItem></AddItem>
      <Item></Item>
    </div>
  </div>
</template>

<script>
import AddItem from "./components/AddItem";
import Item from "./components/Item";
export default {
  name: 'app',
  components: {
      AddItem,
      Item
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
