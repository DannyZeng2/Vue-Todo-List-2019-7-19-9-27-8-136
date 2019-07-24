import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/api'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        items: [],
        newItems:[],
        status: "All",

    },
    getters: {
        getItems(state) {
            return state.items
        },
        getStatus(state) {
            return state.status
        },

    },
    mutations: {
        listItems(state, item) {
            state.items = item;
        },

        editItem(state, id) {
            state.items[id - 1].isEdit = true;
        },

        finishEdit(state, id) {
            state.items[id - 1].isEdit = false;
        },

        add(state, todoItem) {
            var id = state.items.length + 1;
            var newItems = {id:id,name: todoItem, active: false, isEdit: false };
            state.items.push(newItems);
            
        },
        remove(state, id) {
            state.items.splice(id, 1);
        },
        sendStatus(state, flag) {
            state.status = flag;
        }
    },
    actions: {
        async init(context) {
            const res = await API.listTodo();
            if (res.data.code === 200) {
                context.commit('listItems', res.data);
            }

        },

        async addTodoItem(context, todo) {
            const res = await API.addTodo({"name":todo});
            if (res.status === 201) {
                context.commit('add', res.data);
            }
        },

        async deleteTodo(context, id) {

            const res = await API.deleteTodo(id);
            if (res.data.code === 200) {
                context.commit('remove', id);

            }
        },
        async updateTodo(context, todo) {
            const res = await API.editTodo(todo);
            if (res.data.code === 200) {
                context.commit('editItem', -1);

            }
        },
    }
})