import { Store } from 'vuex'
import { FlashMessage, RootState } from '../types/index'

const MODULE_NAME = 'FlashMessages'

export const VuexFlashMessages = (store: Store<RootState>) => {
  if (!store.hasModule(MODULE_NAME))
    store.registerModule(MODULE_NAME, {
      namespaced: true,

      state(): RootState {
        return {
          queue: [],
        }
      },

      getters: {
        all: (state: RootState) => {
          return state.queue
        },
      },

      actions: {
        add: async function (vuexContext, { type = 'info', message, position = 'top' }) {
          return vuexContext.commit('ADD_FLASH_MESSAGE', { type, message, position })
        },

        clearAll: async function (vuexContext) {
          return vuexContext.commit('CLEAR_FLASH_MESSAGES')
        },
      },

      mutations: {
        ADD_FLASH_MESSAGE(state: RootState, flashMessage: FlashMessage) {
          state.queue.push(flashMessage)
        },

        CLEAR_FLASH_MESSAGES(state: RootState) {
          state.queue = []
        },
      },
    })
}

export default VuexFlashMessages
