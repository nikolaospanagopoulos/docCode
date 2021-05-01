import produce from 'immer'
import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'

interface BundlesState {
    [key: string]: {
        loading: boolean
        code: string
        err: string
    } | undefined
}

const initialState: BundlesState = {};

export const bundlesReducer = produce((state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
        case ActionType.BUNDLE_START:
            state[action.payload.cellId] = {
                loading: true,
                code: '',
                err: ''
            }
            return state;
        case ActionType.BUNDLE_COMPLETE:
            state[action.payload.cellId] = {
                loading: false,
                code: action.payload.bundle.code,
                err: action.payload.bundle.error
            }
            return state;
        default:
            return state;
    }
},initialState)