import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import router from '../router'

// **** NOTE: Much of the code below is not functional, at the moment (the tasks using firebase). In addition, the variables and objects will be translated into English. **** //

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0,

    },
    user: null,
    error: {type: null, msg: null}
  },
  mutations: { 
    setError(state, payload) {
      if(payload === "EMAIL_NOT_FOUND") {
        return state.error = {type: 'email', msg: 'This email do not exists'}
      }
    },
    setUser(state, payload) {
      state.user = payload
    },
    cargar(state, payload) {
      state.tareas = payload
    },
    set(state, payload) {
      state.tareas.push(payload)
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)

    },
    tarea(state, payload) {
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/account')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/account')
    }
  },
  actions: {
    signOut({commit}) {
      commit('setUser', null)
      router.push('/')
      localStorage.removeItem('user')
    },
    async loginUser({commit}, user) {
      console.log(user)
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6c9KV9exiIBQUIFnxWbB_ZKODbJq2kzA', {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if(userDB.error){
          console.log(userDB, error)
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        router.push('/home')
        localStorage.setItem('user', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async registerUser({commit}, user) {
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6c9KV9exiIBQUIFnxWbB_ZKODbJq2kzA', {
          method: 'POST',
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log(userDB)
        if(userDB.error){
          console.log(userDB, error)
          return
        }
        commit('setUser', userDB)
        router.push('/home')
        localStorage.setItem('user', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async cargarLocalStorage({commit}){
      if(localStorage.getItem('user')){
        commit('setUser', JSON.parse(localStorage.setItem('user')))
      }else{
        return commit('setUser', null)
      }
      try {
        const resp = await fetch('https://api-firebase-5e49d.firebaseio.com/tareas.json')
        const dataDB = await resp.json()
        const arrayTareas = []

        for(let id in dataDB){
          arrayTareas.push(dataDB[id])
        }
        commit('cargar', arrayTareas)

      } catch (error) {
        console.log(error)
      }
    },
    async setTareas({commit}, tarea) {
      try {
        const resp = await fetch(`https://api-firebase-5e49d.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await resp.json()
        console.log(dataDB)

      } catch (error) {
        console.log(error)
      }
      commit('set', tarea)
    },
    async deleteTareas({commit}, id) {
      try {
        await fetch(`https://api-firebase-5e49d.firebaseio.com/tareas/${id}.json`, { 
        method: 'DELETE',
      }) 
      commit('eliminar', id)
    } catch (error) {
        console.log(error)
      }
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea) {
      try {
        const resp = await fetch(`https://api-firebase-5e49d.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await resp.json();
        commit('update', tarea)

      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    signedUser(state) {
      return !!state.user
    }
  },
  modules: {
  }
})
