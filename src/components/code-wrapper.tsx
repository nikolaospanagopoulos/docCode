import { useState, useEffect } from 'react';
import { CodeEditor } from './code-editor'
import { Preview } from './preview'
import { bundle } from '../bundler/index'
import { Resizable } from './resizable'
function CodeWrapper() {
    const [code, setCode] = useState('')
    const [error,setError] = useState('')
    const [input, setInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(async() => {
            const output = await bundle(input)
            setCode(output.code)
            setError(output.err)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [input])






    return (
        <Resizable direction="vertical">
            <div className="App" style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction='horizontal'>
                    <CodeEditor initialValue="const a = 1;" onChange={(value) => setInput(value)} />
                </Resizable>
                <Preview code={code} error={error}/>
            </div>
        </Resizable>
    );
}


export { CodeWrapper };
