<template>
    <div>
        <div v-for="item in items" :key="item">
            <div class="items">
                {{item.id}}.<input type="checkbox" v-model="item.active"/>

                <label :class="{finishItem:item.active}" @dblclick="editItem(item.id,item.name)">
                    <span v-if="!item.isEdit">{{item.name}}</span>
                    <span v-else>
                    <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)">
                    </span>
                </label>

            </div>
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