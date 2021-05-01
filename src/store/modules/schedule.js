// initial state
const state = () => ({
    data: []
})

// getters
const getters = {
    checkMonthInData: (state) => (value) => {
        return state.data.filter( item => item.month === value).length
    },
    checkDateInData: (state) => (value) => {
        const MONTH = state.data.filter( item => item.month === value.month)[0]
        return MONTH?.days.filter( item => item.date === value.date).length
    },
    getRemindersByDay: (state) => (value) => {
        const MONTH = state.data.filter( item => item.month === value.month)[0]
        return MONTH?.days.filter( item => item.date === value.date)[0]
    },
    checkReminderId: (state) => (value) => {
        const MONTH = state.data.filter( item => item.month === value.month)[0]
        const DATE = MONTH.days.filter( item => item.date === value.date)[0]
        return DATE.reminders.filter( item => item.id === value.id).length
    }
}

// actions
const actions = {
    createMonth ({ commit }, payload) {
        commit('ADD_MONTH', payload)
    },
    createDay ({ commit }, payload) {
        commit('ADD_DAY', payload)
    },
    createReminder({ commit }, payload) {
        commit('ADD_REMINDER', payload)
    },
    updateReminder({ commit }, payload) {
        commit('REMOVE_REMINDER', payload)
        commit('ADD_REMINDER', payload)
    },
}

// mutations
const mutations = {
    ADD_MONTH( state, payload ) {
        state.data.push(payload)
    },
    ADD_DAY( state, payload ) {
        state.data.filter( item => item.month === payload.month)[0].days.push(payload.result)
    },
    ADD_REMINDER( state, payload) {
        state.data
            .filter( item => item.month === payload.month)[0].days
                .filter( item => item.date === payload.date)[0].reminders.push(payload.result)
    },
    REMOVE_REMINDER( state, payload) {
        let reminders = state.data
            .filter( item => item.month === payload.month)[0].days
                .filter( item => item.date === payload.date)[0].reminders
        
        let index = reminders.findIndex( item => item.id === payload.id )
        reminders.splice(index, 1)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}