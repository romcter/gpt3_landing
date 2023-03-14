import React from "react";
import './brand.css'
import {google, shopify, slack, dropBox, atlassian} from './imports'

const Img = ({src, alt}) => {
    return <div>
        <img src={src} alt={alt}/>
    </div>
}

const Brand = () => {
    return (
        <div className='gpt3__brand'>
            <Img src={google} alt={'google'}/>
            <Img src={shopify} alt={'shopify'}/>
            <Img src={slack} alt={'slack'}/>
            <Img src={dropBox} alt={'dropBox'}/>
            <Img src={atlassian} alt={'atlassian'}/>
        </div>
    )
}

export default Brand