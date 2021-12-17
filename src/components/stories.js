import React from 'react'
import './stories.css'
import psg from '../assets/psg.jpg'
import uberkuloz from '../assets/uberkuloz.jpg'
import minecraft from '../assets/minecraftbuildings.jpg'
import neegars from '../assets/neegars.jpg'
import tomfelton  from '../assets/tomfelton.jpg'
import mosyotaha from '../assets/mosyotaha.jpg'
import filmegitmedenonce from '../assets/filmegitmedenonce.jpg'
export default function Stories() {
    return (
        <div className="stories">
            <div className="story">
            <div className='lolaa'>
                <img className="storyPhoto" src={psg}>

                </img>
                </div>
                <p className="storyUser">psg</p>
            </div>
            <div className="story">
            <div className='lolaa'>
                <img className="storyPhoto" src={minecraft}>

                </img>
                </div>
                <p className="storyUser">mcbuildings</p>
            </div>
            <div className="story">
            <div className='lolaa'>
                <img className="storyPhoto" src={uberkuloz}>

                </img>
                </div>
                <p className="storyUser">uberkuloz</p>
            </div>
            <div className="story">
            <div className='lolaa'>
                <img className="storyPhoto" src={neegars}>

                </img>
                </div>
                <p className="storyUser">neegars</p>
            </div>
            
            <div className="story">
                <div className='lolaa'>
                <img className="storyPhoto" src={mosyotaha}>

                </img></div>
                <p className="storyUser">mosyotaha</p>
            </div>
            <div className="story">
                <div className='lolaa'>
                <img className="storyPhoto" src={filmegitmedenonce}>

                </img>
                </div>
                <p className="storyUser">filmegit...</p>
            </div>
            <div className="story">
            <div className='lolaa'>
                <img className="storyPhoto" src={tomfelton}>

                </img>
                </div>
                <p className="storyUser">t22felton</p>
            </div>
            <div className="story">
                <div className='lolaa'>
                <img className="storyPhoto" src={mosyotaha}>

                </img></div>
                <p className="storyUser">mosyotaha</p>
            </div>
            
        </div>
    )
}
