<template>
  <div id="app">
    <div class="outerdiv">
      <div class="rootdiv">
        <p>Vue.js To Do List</p>
        <i>Simple Todo List with adding and filter by diff status</i><br/><br />

        <Header></Header>
        <Items :status="status"></Items>
        <Footer @func="getStatusFormFooter"></Footer>
        
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import itemList from "./components/ItemList";

export default {
  name: "app",
  components: {
    Header,
    Items,
    Footer
  },
  data() {
    return {
      status: itemList.status
    };
  },
  methods: {
    getStatusFormFooter(data) {
      this.status = data;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: block;
  color: #2c3e50;
}
</style>
