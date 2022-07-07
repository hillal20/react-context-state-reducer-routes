import React, {useContext} from "react";
import { DispatchContext } from "../../context/parentContext";

const Headers = ()=> {
    const state = useContext(DispatchContext)
    return <>
            <h2>Headers</h2>
            <button 
                 onClick={()=> state.dispatch({type:'CLICKED'})}
            >Click me
            </button>
           </>
}

export default Headers