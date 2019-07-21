<template>
  <div id="app">
    
    <AddItem></AddItem>

  </div>
</template>

<script>
import AddItem from "./components/AddItem";
export default {
  name: 'app',
  components: {
      AddItem,
      
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
