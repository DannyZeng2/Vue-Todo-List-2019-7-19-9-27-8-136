<template>
  <div id="app">
    <div class="outerdiv">
      <div class="rootdiv">
        <p>Vue.js To Do List</p>
        <i >Simple Todo List with adding and filter by diff status</i>
        <br/><br/>
        <Header></Header>
        <Items></Items>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Items from "./components/Items";
export default {
  name: 'app',
  components: {
      Header,
      Items
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
