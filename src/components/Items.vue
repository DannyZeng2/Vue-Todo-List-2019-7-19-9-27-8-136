<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <TodoItem :item="item" :items="items" :status="status"></TodoItem>
        </div>
        <br/>

        
 
    </div>
</template>

<script>
    //import Footer from './Footer';
    import itemList from './ItemList';
    import TodoItem from './TodoItem';
    export default {
        name: "Items",
        props:["status"],
        components:{
            TodoItem,
           // Footer
        },
        data(){
            return {
                items:itemList.items,
               // status:itemList.status
               
            }
        },
        
        // methods: {
        //     getStatusFormFooter(data){
        //         this.status = data
        //     }
        // }
    }
</script>

<style scoped>
@import '../css/style.css';
    
</style>