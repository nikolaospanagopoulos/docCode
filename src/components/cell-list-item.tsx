import { Cell } from "../state/cell"
import {CodeWrapper} from './code-wrapper'
import {TextEditor} from './text-editor'
import {ActionBar} from '../components/action-bar'
import './cell-list-item.css'
interface CellListItemProps {
    cell:Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
    let child: JSX.Element
    if (cell.type === 'code') {
        child = 
        <>
        <div className='action-bar-wrapper'>
        <ActionBar id={cell.id}/>
        </div>
        <CodeWrapper cell={cell}/>
        </>
    } else {
        child = 
        <>
        <TextEditor  cell={cell}/>
        <ActionBar id={cell.id}/>
        </>
    }
    return( 
        <div className='cell-list-item'>
            {child}          
        </div>)
}



export {CellListItem}