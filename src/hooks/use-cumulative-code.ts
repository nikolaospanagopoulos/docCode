import {useTypedSelector} from './use-typed-selector'
export const useCumulativeCode = (cellId:string) => {
    return useTypedSelector((state) => {
        const { order, data } = state.cells;
    
        const orderedCells = order.map((id) => data[id]);
        const showFunc =  `
        const root =  document.querySelector('#root')
        var show = (value) => {
            if(typeof value === 'object'){
                if(value.$$typeof && value.props){
                    ReactDOM.render(value,root)
                }else{
                    root.innerHTML = JSON.stringify(value)
                }
                
            }else{
                document.root.innerHTML = value
            }
            
        }
        `
        const showFuncNoOp = 'var show = () => {}'
        const cumulativeCode = [
         
        ];
        for (let c of orderedCells) {
          if (c.type === "code") {
              if(c.id === cellId){
                  cumulativeCode.push(showFunc)
              }else{
                  cumulativeCode.push(showFuncNoOp)
              }
            cumulativeCode.push(c.content);
          }
          if (c.id === cellId) {
            break;
          }
        }
        return cumulativeCode;
      }).join('\n')
}