import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {useMemo} from 'react'
import { updateCell, deleteCell, moveCell, insertCellAfter } from '../state/action-creators/cells-action-creators' 
import {createBundle} from '../state/action-creators/bundles-action-creators'
const actionCreators = {
    updateCell,deleteCell,moveCell,insertCellAfter,createBundle
}
export const useActions = () => {
    const dispatch = useDispatch()

    

    return useMemo(() => {
        return bindActionCreators(actionCreators,dispatch)
    },[dispatch])
}

