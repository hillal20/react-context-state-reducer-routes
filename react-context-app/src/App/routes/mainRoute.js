import React from 'react'
import Headers from '../components/headers'
import Footers from '../components/footers'
import Contents from '../components/contents'
import AdsSection from '../components/adsSection'
import { ParentContext } from '../../context/parentContext'



const MainRoute = () => {
const state = React.useContext(ParentContext)
return (
        <div className="App">
            <h1>Hello word</h1>
            <h4>salary: {state.salary}</h4>
            <Headers/>
            <AdsSection/>
            <Contents/>
            <Footers/>          
        </div> 
        )
}

export default MainRoute