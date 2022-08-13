import React from 'react';
import {Outlet} from 'react-router-dom'

const NestedRoutes = ()=>{

return ( <>
           <h1>NestedRoutes</h1>  
           <h4>nested routes content is bellow</h4>
           <Outlet/>
        </>)
}

export default NestedRoutes;