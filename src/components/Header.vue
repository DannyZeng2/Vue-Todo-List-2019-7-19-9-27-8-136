<template>
  <div>
    <div>
      <a-input id="additem" v-model="todoItem" type="text" />&nbsp;
      <a-button id="addBtn" @click="add">Add</a-button>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      todoItem: ""
    };

  },
   computed: {
    items() {
      return this.$store.getters.getItems;
    }
  },
  methods: {

    add() {
      if (this.todoItem == undefined || this.todoItem == "") {
        return;
      }

      if(this.items.filter(item=>item.name === this.todoItem.trim()).length!=0){
          this.$message.error('该事项已存在，请勿重复输入');
          return;
      }

      //this.$store.dispatch("addTodoItem", this.todoItem);
      this.$store.commit("add", this.todoItem.trim());
      this.todoItem = "";
    }
  }
};
</script>

<style scoped>
@import "../css/style.css";
</style>