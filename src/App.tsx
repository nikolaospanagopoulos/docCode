//import {CodeWrapper} from './components/code-wrapper'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import { TextEditor } from './components/text-editor'
import { Provider } from 'react-redux'
import {store} from './state/store'
function App() {


  return (
    <Provider store={store}>
      <div >
        <TextEditor />
      </div>
    </Provider>
  );
}


export default App;
