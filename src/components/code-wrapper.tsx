import { useEffect } from 'react';
import { CodeEditor } from './code-editor'
import { Preview } from './preview'
import { Resizable } from './resizable'
import { Cell } from '../state/cell';
import { useActions } from '../hooks/use-actions'
import {useTypedSelector} from '../hooks/use-typed-selector'
interface CodeWrapperProps {
    cell: Cell
}
const CodeWrapper: React.FC<CodeWrapperProps> = ({ cell }) => {
    const { updateCell,createBundle } = useActions()

 const bundle = useTypedSelector((state) =>state.bundles[cell.id])
    useEffect(() => {
        const timer = setTimeout(async () => {
            createBundle(cell.id,cell.content)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [cell.content,cell.id,createBundle])






    return (
        <Resizable direction="vertical">
            <div className="App" style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction='horizontal'>
                    <CodeEditor initialValue={cell.content} onChange={(value) => updateCell(cell.id, value)} />
                </Resizable>
                {bundle && <Preview code={bundle.code} error={bundle.err} />}
                
            </div>
        </Resizable>
    );
}


export { CodeWrapper };
