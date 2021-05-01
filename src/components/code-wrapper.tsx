import { useState, useEffect } from 'react';
import { CodeEditor } from './code-editor'
import { Preview } from './preview'
import { bundle } from '../bundler/index'
import { Resizable } from './resizable'
import { Cell } from '../state/cell';
import { useActions } from '../hooks/use-actions'

interface CodeWrapperProps {
    cell: Cell
}
const CodeWrapper: React.FC<CodeWrapperProps> = ({ cell }) => {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const { updateCell } = useActions()
    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(cell.content)
            setCode(output.code)
            setError(output.err)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [cell.content])






    return (
        <Resizable direction="vertical">
            <div className="App" style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction='horizontal'>
                    <CodeEditor initialValue={cell.content} onChange={(value) => updateCell(cell.id, value)} />
                </Resizable>
                <Preview code={code} error={error} />
            </div>
        </Resizable>
    );
}


export { CodeWrapper };
