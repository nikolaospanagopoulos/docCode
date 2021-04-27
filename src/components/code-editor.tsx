import MonacoEditor, { EditorDidMount } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import {useRef} from 'react'
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
        })

        //set formatted back to editor
        editorRef.current.setValue(formatted)
    }
    return (
        <div>
            <button onClick={()=>onFormatClick()}>Format</button>

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