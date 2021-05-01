//import {CodeWrapper} from './components/code-wrapper'
import 'bulmaswatch/superhero/bulmaswatch.min.css'
import { Provider } from 'react-redux'
import { store } from './state/store'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {CellList} from './components/cell-list'
function App() {


  return (
    <Provider store={store}>
      <div >
        <CellList/>
      </div>
    </Provider>
  );
}


export default App;
