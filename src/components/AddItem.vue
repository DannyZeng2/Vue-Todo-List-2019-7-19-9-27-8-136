<template>
    <div style="margin: 0 auto;width: 400px;">
        <div style="float:left;display:block">Vue To Do List</div>
        <div style="float:left;display:block">Simple Todo List with adding and filter by diff status.</div>
        <div>
        <input v-model="msg" type="text" name="additem" style="float:left">
        <button @click="add" style="float:left">add</button>
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
</style>