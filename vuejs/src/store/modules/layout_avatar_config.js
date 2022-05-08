export const layout_avatar_config = {
    namespaced: true,
    state: {
        avatar_config: {
            top: 300,
            left: 900,
            border_radius: 1,
            width: 5,
            border_color: 'red',
            border_type: 'solid',
            border_size: 2
        }
    },
    getters: {
        avatar_config (state) {
            return state.avatar_config
        }
    },
    actions: {
        setAvatarWidth ({ commit }, payload) {
            commit('setAvatarWidth', payload)
        }
    },
    mutations: {
        setAvatarWidth (state, payload) {
            state.avatar_config.width = payload
        }
    }
}
