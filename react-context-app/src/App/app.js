import React from 'react'
import Headers from './components/headers'
import Footers from './components/footers'
import Contents from './components/contents'
import AdsSection from './components/adsSection'
import { ParentContext } from '../context/parentContext'

const App = () => {
const state = React.useContext(ParentContext)
const MemoizedAdsSection = React.memo(() => <AdsSection/>)
return (<div className="App">
            <h1>Hello word</h1>
            <h4>salary: {state.salary}</h4>
            <Headers/>
            <MemoizedAdsSection />
            <Contents/>
            <Footers/>          
        </div>)
}

export default App