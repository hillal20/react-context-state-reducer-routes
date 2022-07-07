
import React, { useReducer} from 'react'
import  {ParentContext}  from '../context/parentContext'
import App from './app'
import { AdsSectionContext , DispatchContext} from '../context/parentContext'


const reducerFn = (state , action)=> {
 switch(action.type){
  case "CLICKED":
  return {
           ...state,
           clickCount: state.clickCount++
      }
  case "SETSALARY":
    return {
       ...state,
       salary : action.payload
    }
  default:
    return state
 }
}
const initialState = { 
  clickCount:0,
  ages: [12, 34,35],
  gender: ['male','female'],
  salary :'',
  adsDetail : { adName:'Sprite', adDuration: 15}
}
function Wrapper() {
  const [state, dispatch] = useReducer(reducerFn, initialState)
  console.log("state ===> ", state )

  
  return (
  <AdsSectionContext.Provider value={state}>   
    <ParentContext.Provider value={state}>
      <DispatchContext.Provider value={{dispatch}}>
        <App/>
      </DispatchContext.Provider>
    </ParentContext.Provider>  
  </AdsSectionContext.Provider>   
   
  );
}

export default Wrapper;
