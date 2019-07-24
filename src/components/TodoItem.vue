<template>
  <div 
    v-if="status==='All'||status==='Active'&&item.active===false||status==='Complete'&&item.active===true"
    :class="[contains(items, item)%2===1?'odd-item':'even-item']" style="padding-right:20px;">

    <span>{{contains(items, item)+1}}.</span>
    <a-checkbox v-model="item.active"/>
&nbsp;
    <label :class="{finishItem:item.active}" @dblclick="editItem(item.id)">
      <span v-if="!item.isEdit">{{item.name}}</span>
      <span v-else>
        <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)" />
      </span>
    </label>
    <a-popconfirm title="是否确定删除?" @confirm="deleteItem" okText="是" cancelText="否">   

      <a-icon type="delete" style="float:right"/>
    </a-popconfirm>
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
      //this.$store.dispatch("updateTodo", id);
    },

    deleteItem(id) {
      this.$store.commit("remove", id);
      //this.$store.dispatch("deleteTodo", id);
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

