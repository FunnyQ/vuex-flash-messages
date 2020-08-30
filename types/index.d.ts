import { Store } from 'vuex'

declare type MessageType = 'danger' | 'notice' | 'info' | 'warning' | 'success'
declare type Position = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right'

export declare type FlashMessage = {
  type: MessageType
  message: string
  position: Position
}

export declare type RootState = {
  queue: FlashMessage[]
}

export declare const vuexFlashMessages: (store: Store<RootState>) => void
