import Vue from 'vue'
import Vuex from 'vuex'
import todos from "../Endponts/todos";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : []
  },
  mutations: {
    GET_TODOS: (state , payload)=> {
      state.todos = payload
    },
    ADD_ELEMENT_TODOS: (state , payload)=> {
     this.todos = state.todos.push(payload)
    }

  },
  actions: {
    /*getTodos: () => {
      return todos.getAllTodos()
    },*/

    getTodos: (context) => {
      todos.getAllTodos().then((res) => {
            context.commit('GET_TODOS',res.data);
          })
    },
    addElementTodo: (context,payload) => {
      console.log('action', payload)
        context.commit('ADD_ELEMENT_TODOS',payload);
    },
  },
  modules: {
  }
})
