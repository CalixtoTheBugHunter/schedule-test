// initial state
const state = () => ({
    data: {}
})

// getters
const getters = {
    hasDateInData: (state) => (value) => {
        return state.data[value] !== undefined && state.data[value].length !== 0
    },
    getRemindersByDay: (state) => (value) => {
        return state.data[value]
    },
    hasReminderId: (state) => (value) => {
        return state.data[value.date]?.filter( item => item.id === value.result.id).length !== 0
    }
}

// actions
const actions = {
    createDay ({ commit }, payload) {
        commit('ADD_DATE', payload)
    },
    createReminder({ commit }, payload) {
        commit('ADD_REMINDER', payload)
    },
    updateReminder({ commit }, payload) {
        commit('REMOVE_REMINDER', payload)
        commit('ADD_REMINDER', payload)
    },
    deleteReminder({ commit }, payload) {
        commit('REMOVE_REMINDER', payload)
    },
}

// mutations
const mutations = {
    ADD_DATE( state, payload ) {
        state.data[payload] = []
    },
    ADD_REMINDER( state, payload) {
        state.data[payload.date].push(payload.result)
    },
    REMOVE_REMINDER( state, payload) {
        let index = state.data[payload.date].findIndex( item => item.id === payload.result.id )
        state.data[payload.date].splice(index, 1)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}