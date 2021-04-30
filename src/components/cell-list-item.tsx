import { Cell } from "../state/cell"
import {CodeWrapper} from './code-wrapper'
import {TextEditor} from './text-editor'
interface CellListItemProps {
    cell:Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
    let child: JSX.Element
    if (cell.type === 'code') {
        child = <CodeWrapper cell={cell}/>
    } else {
        child = <TextEditor />
    }
    return <div>{child}</div>
}



export {CellListItem}