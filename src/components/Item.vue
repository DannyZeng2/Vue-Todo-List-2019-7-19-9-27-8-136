<template>
    <div>
        <div v-for="item in items" :key="item">
            <div v-if="status==='All'||status==='Active'&&item.active===false||status==='Complete'&&item.active===true" class="item">

                <span>{{item.id}}. </span>
                <input type="checkbox" class="checkbox" v-model="item.active"/>

                <label :class="{finishItem:item.active}" @dblclick="editItem(item.id,item.name)">
                    <span v-if="!item.isEdit">{{item.name}}</span>
                    <span v-else>
                    <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)">
                    </span>
                </label>

            </div>
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
    export default {
        name: "Item",
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
            editItem(id,name){
                this.items[id-1].isEdit=true;
            },

            finishEdit(id){
                this.items[id-1].isEdit=false;
            }
        }
    }
</script>

<style scoped>
@import '../style.css';
    
</style>