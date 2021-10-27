const MODULE_NAME = 'flashMessage';
export const VuexFlashMessages = (store) => {
    if (!store.hasModule(MODULE_NAME))
        store.registerModule(MODULE_NAME, {
            namespaced: true,
            state() {
                return {
                    queue: [],
                };
            },
            getters: {
                all: (state) => {
                    return state.queue;
                },
            },
            actions: {
                add: async function (vuexContext, { type = 'info', message, position = 'top' }) {
                    return vuexContext.commit('ADD_FLASH_MESSAGE', { type, message, position });
                },
                clearAll: async function (vuexContext) {
                    return vuexContext.commit('CLEAR_FLASH_MESSAGES');
                },
            },
            mutations: {
                ADD_FLASH_MESSAGE(state, flashMessage) {
                    state.queue.push(flashMessage);
                },
                CLEAR_FLASH_MESSAGES(state) {
                    state.queue = [];
                },
            },
        });
};
export default VuexFlashMessages;
//# sourceMappingURL=vuex-flash-messages.js.map