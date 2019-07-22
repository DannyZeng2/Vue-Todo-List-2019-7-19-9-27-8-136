<template>
    <div>
        <div v-for="item in items" :key="item.id">
    
            <TodoItem :item="item" :items="items" :status="status"></TodoItem>
            
        </div>
        <br/>

        <div class="itemstatus" >
            <button class="btnState" @click="changeStatus('All')" >All</button>&nbsp;&nbsp;
            <button class="btnState" @click="changeStatus('Active')" >Active</button>&nbsp;&nbsp;
            <button class="btnState" @click="changeStatus('Complete')" >Complete</button>
        </div>

        
    </div>
</template>

<script>
    import itemList from './ItemList';
    import TodoItem from './TodoItem';
    export default {
        name: "Items",
        components:{
            TodoItem
        },
        data(){
            return {
                items:itemList.items,
                status:itemList.status
               
            }
        },
        
        methods: {

            changeStatus(state) {
                this.status=state;
                itemList.status=state;
            },
            // editItem(id,name){
            //     this.items[id-1].isEdit=true;
            // },

            // finishEdit(id){
            //     this.items[id-1].isEdit=false;
            // }
        }
    }
</script>

<style scoped>
@import '../css/style.css';
    
</style>