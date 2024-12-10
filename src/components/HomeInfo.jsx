import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';
// for rendering the content of the box 
const InfoBox=({text,link ,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        
        <Link 
        to={link}
        className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
// reusable 
const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Shane</span>👋
            <br/>
            I'm looking for full time SDE/SWE position. 
            <br/>
            Please don't hesitate to reach out!
        </h1>
    ),
    2:(
        <InfoBox text='Graduated from University of Utah, Master of Software Development.' 
        link='/about'
        btnText='Learn more'
        />
    ),
    3:(
        <InfoBox text='2 years experienced SAP ABAP consultant/developer and interned in AtlasRTX, an AI Chatbot company in Park City, UT. ' 
        link='/projects'
        btnText='Visit my portfolio'
        />
    ),    
    4:(
        <InfoBox text=' Accomplished multiple projects, including backend, frontend and full stack developments.' 
        link='/contact'
        btnText='Contact me'
        />
    ),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo