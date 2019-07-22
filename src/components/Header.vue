<template>
  <div>
    <div>
      <input id="additem" v-model="todoItem" type="text" />&nbsp;
      <button id="addBtn" @click="add">Add</button>
    </div>
  </div>
</template>

<script>
//import itemList from "./ItemList";
export default {
  name: "Header",
  data() {
    return {
      todoItem: ""
    };
  },
  methods: {
    add(todoItem) {
      if (this.todoItem == undefined || this.todoItem == "") {
        return;
      }
      this.$store.commit("add", this.todoItem);
      this.todoItem = "";
    }
  }
};
</script>

<style scoped>
@import "../css/style.css";
</style>