<template>
    <div>
        <div >
        <input id="additem" v-model="todoItem" type="text">
        <button id="addBtn" @click="add">Add</button>
        </div>
    </div>
</template>

<script>
    import itemList from './ItemList';
    export default {
        name: "AddItem",
        data(){
            return {
                todoItem:"",
            }
        },
        methods:{
                add(){
                    let id = itemList.items.length+1;
                    let objs={"id":id,"name":this.todoItem,"active":false,"isEdit":false};
                    itemList.items.push(objs);
                    this.todoItem="";
                }
        }
    }
</script>

<style scoped>
  @import '../style.css';
</style>