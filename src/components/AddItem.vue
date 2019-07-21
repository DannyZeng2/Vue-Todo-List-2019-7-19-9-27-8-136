<template>
    <div>
        <div>
        <input id="additem" v-model="todoItem" type="text">&nbsp;
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
                    let items={"id":id,"name":this.todoItem,"active":false,"isEdit":false};
                    if(this.todoItem!=""){
                        itemList.items.push(items);
                    }
                    this.todoItem="";
                }
        }
    }
</script>

<style scoped>
  @import '../style.css';
</style>