import React from "react";

import {Footer, Blog, Header, Features, WhatGPT, Possibility} from './containers'
import {Cta, Navbar, Brand} from './components'
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App