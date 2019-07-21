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
  @import './style.css';
</style>
