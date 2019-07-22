<template>
  <div
    v-if="status==='All'||status==='Active'&&item.active===false||status==='Complete'&&item.active===true"
    class="item"
  >
    <span>{{item.id}}.</span>
    <input type="checkbox" class="checkbox" v-model="item.active" />

    <label :class="{finishItem:item.active}" @dblclick="editItem(item.id)">
      <span v-if="!item.isEdit">{{item.name}}</span>
      <span v-else>
        <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)" />
      </span>
    </label>
  </div>
</template>

<script>
import itemList from "./ItemList";
export default {
  name: "TodoItem",
  props: ["item", "items", "status"],
  data() {
    return {};
  },
  methods: {
    editItem(id) {
      this.items[id - 1].isEdit = true;
    },

    finishEdit(id) {
      this.items[id - 1].isEdit = false;
    }
  }
};
</script>

