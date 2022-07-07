import React, {useContext}  from "react";
import { ParentContext , DispatchContext } from "../../context/parentContext";
const  Contents =  () => {
      const state  = useContext(ParentContext)
      const {dispatch } = useContext(DispatchContext);
    return <>
            <h2>Contents</h2>
            <input
                name = "salary"
                placeholder = "salary"
                value = {state.salary}
                onChange= {(e)=> dispatch({ 
                                           type: "SETSALARY",
                                           payload: e.target.value
                                          })
                          }
            />
          </>
}
export default Contents