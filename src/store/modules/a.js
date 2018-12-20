
const state = {
    a:1
}

const mutations = {
    add(state){
        state.a ++
    },
    less(state){
        state.a --
    }
}

const actions = {
    add:({commit}) => {
        commit('add')
    },
    less:({commit}) => {
        commit('less')
    }
}

export default {
    state, 
    mutations,
    actions
}



