<template>
  <div
    v-if="status==='All'||status==='Active'&&item.active===false||status==='Complete'&&item.active===true"
    :class="[contains(items, item)%2===1?'odd-item':'even-item']"
  >
    <span>{{contains(items, item)+1}}.</span>
    <a-checkbox v-model="item.active" />
&nbsp;
    <label :class="{finishItem:item.active}" @dblclick="editItem(item.id)">
      <span v-if="!item.isEdit">{{item.name}}</span>
      <span v-else>
        <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)" />
      </span>
    </label>
    <a-icon type="close" style="float:right" @click="deleteItem(contains(items, item))" />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  computed: {
    status() {
      return this.$store.getters.getStatus;
    },
    items() {
      return this.$store.getters.getItems;
    }
  },
  methods: {
    editItem(id) {
      this.$store.commit("editItem", id);
    },

    finishEdit(id) {
      this.$store.commit("finishEdit", id);
    },

    deleteItem(id) {
      this.$store.commit("remove", id);
    },
    contains(arrays, obj) {
      var i = arrays.length;
      while (i--) {
        if (arrays[i] === obj) {
          return i;
        }
      }
      return false;
    }
  }
};
</script>

