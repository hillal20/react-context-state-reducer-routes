import React  from "react";
import { ParentContext } from "../../context/parentContext";

const  Footers =  ()=> {
    return <>
    <h2>footers</h2>
       <ParentContext.Consumer>
        {
            (state ) =>  {
                return state.salary === '5000' ? <div> Manager</div> : <div> Employee</div>
            }
        }        
       </ParentContext.Consumer>
    </>
}

export default Footers