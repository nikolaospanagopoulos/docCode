import { Dispatch } from 'redux'
import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'
import { bundle } from '../../bundler/index'


export const createBundle = (cellId: string, input: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId
            }
        })
        const result = await bundle(input)

        dispatch({
            type:ActionType.BUNDLE_COMPLETE,
            payload:{
                cellId,
                bundle:{
                    code:result.code,
                    error:result.err
                }
            }
        })
    }
}