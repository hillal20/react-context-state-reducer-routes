import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainRoute from './routes/mainRoute'
import FirstRoute from './routes/firstRoute'
import Error from './routes/error'
import NestedRoutes from './routes/nestedRoutes'
import NestedRouteOne from './routes/nestedRouteOne'
import NestedRouteTwo from './routes/nestedRouteTwo'
import CFNRoutesLanding from './routes/contentForNestedRoutesLanding'
import SingleProduct from './routes/singleProduct'
import ProtectedRoute from './routes/protectedRoute'
const App = () => {
return (
       <BrowserRouter>
            <Routes>
               <Route  path="/" element={<MainRoute/>} />
               <Route  path="firstRoute" element={<FirstRoute/>} />
               <Route  path="*" element={<Error/>} />
               <Route  path="nestedRoutes" element={<NestedRoutes/>} > 
                    <Route  index  element={<CFNRoutesLanding/>}/>
                    <Route  path='nestedRouteOne' element={<ProtectedRoute user={'aissani'}>
                                                              <NestedRouteOne/>
                                                           </ProtectedRoute>}
                    />                 
                    <Route  path="nestedRouteTwo" element={<NestedRouteTwo/>} />
                    <Route  path="nestedRouteTwo/:productId" element={<SingleProduct/>} />
               </Route>
            </Routes>
        </BrowserRouter>
       )
}

export default App