import { useState } from 'react';
import { CodeEditor } from './code-editor'
import { Preview } from './preview'
import {bundle} from '../bundler/index'
function CodeWrapper() {


  const [code,setCode] = useState('')
  const [input, setInput] = useState('');



  const onClickButton = async () => {
  
    const output = await bundle(input) 
      setCode(output)
  }

  
  return (
    <div className="App">
      <CodeEditor initialValue="const a = 1;" onChange={(value)=>setInput(value)}/>
      <div>
        <button onClick={() => onClickButton()}>Submit</button>
      </div>
      <Preview code={code}/>
    </div>
  );
}


export {CodeWrapper};
