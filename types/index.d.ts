import { Store } from 'vuex'

export declare type FlashMessage = {
  type: string
  message: string
  position: string
}

export declare type RootState = {
  queue: FlashMessage[]
}

export declare const vuexFlashMessages: (store: Store<RootState>) => void
