import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {

    addTodo(data) {
        return axios({
            url: ' http://localhost:8088//todos',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    listTodo() {
        return axios.get(' http://localhost:8088//todos');
    },
    editTodo(data) {
        return axios({
            url: ' http://localhost:8088//' + data.id,
            method: 'put',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    deleteTodo(id) {
        return axios({
            url: ' http://localhost:8088//todos/' + id,
            method: 'delete',
        });
    },

}