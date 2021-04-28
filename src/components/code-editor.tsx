import MonacoEditor, { EditorDidMount } from '@monaco-editor/react'
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import { useRef } from 'react'
import './code-editor.css'
interface CodeEditorProps {
    initialValue: string,
    onChange(value: string): void
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
    const editorRef = useRef<any>()
    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue())
        })
        monacoEditor.getModel()?.updateOptions({ tabSize: 2 })
    }

    const onFormatClick = () => {
        //get current value
        const unformatted = editorRef.current.getModel().getValue()

        //format value
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            semi: true,
            useTabs: false,
        }).replace(/\n$/,'');

        //set formatted back to editor
        editorRef.current.setValue(formatted)
    }
    return (
        <div className='editor-wrapper'>
            <button className='button button-format is-primary is-small' onClick={()=>onFormatClick()}>Format</button>

            <MonacoEditor height='500px' language='javascript' theme='dark' value={initialValue}


                editorDidMount={onEditorDidMount}
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
                }}
            />
        </div>
    )
}


export { CodeEditor }