import React from 'react';
import "../scss/Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/AFISHA.KG (1).png'



const Header = () => {
    return (
        <header id="header">
            <div className="header__body">
                <a href="">
                    <img  src={Logo} alt=""style={{
                        width:"148%"

                    }}/>

                </a>
                    <input type="text" placeholder="поиск событие,концертов" className="header__body__headers"/>
                    <span  className='header__body--icon'> <FontAwesomeIcon style={{color: 'white'}} icon={faMagnifyingGlass}/></span>

            </div>

        </header>
    );
};

export default Header;