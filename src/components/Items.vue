<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <TodoItem :item="item"></TodoItem>
    </div>
    <br />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Items",
 // props: ["status"],
  components: {
    TodoItem
    // Footer
  },
  data() {
    return {
    };
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    }
  }
};
</script>

<style scoped>
@import "../css/style.css";
</style>