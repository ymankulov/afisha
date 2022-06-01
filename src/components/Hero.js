import React, {useState} from 'react';
import "../scss/Hero.scss"
import '../index.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {useEffect} from "react";
import {getAbout, getCategory} from "../redux/actions/actions";

const Hero = () => {
    const {advertising} = useSelector(s => s)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch((getCategory()))
    }, [dispatch])
    return (
        <hero id="hero">
            <div className="container">
                <div className="hero__rout">
                    <div className='hero__rout--text'>
                        {
                            advertising.map(el => (
                                <li>
                                    <NavLink to={`/${el.name}`} className='hero__rout--link'>
                                        {
                                            el.name
                                        }
                                    </NavLink>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </hero>
    );
};

export default Hero;