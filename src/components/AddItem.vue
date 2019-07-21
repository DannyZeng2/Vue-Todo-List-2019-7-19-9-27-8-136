<template>
    <div style="margin: 0 auto;width: 500px;">
        <div id = "div1">Vue To Do List</div>
        <div id = "div1">Simple Todo List with adding and filter by diff status.</div>
        <div>
        <input v-model="msg" type="text" name="additem">
        <button name = "add" @click="add">add</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddItem",
        data(){
            return {
               
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
  @import '../style.css';
</style>