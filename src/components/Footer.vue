<template>
  <div class="itemstatus">
    <button class="btnState" @click="sendStatus('All')">All</button>&nbsp;&nbsp;
    <button class="btnState" @click="sendStatus('Active')">Active</button>&nbsp;&nbsp;
    <button class="btnState" @click="sendStatus('Complete')">Complete</button>
  </div>
</template>

<script>
import itemList from "./ItemList";
export default {
  name: "Footer",
  data() {
    return {
      status:itemList.status
    };
  },

  methods: {
    sendStatus(state) {
      this.status=state;
      this.$emit('func',this.status);
    }
  }
};
</script>

