
const state = {
    b:10
}

const mutations = {
    add (state){
        state.b ++
    },
    less (state){
        state.b --
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
    state, mutations, actions
}

