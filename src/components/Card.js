import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import '../pages/style/Card.css'


const Card = ({el}) => {

    const month = el.time.slice(5, 7)
    const day = el.time.slice(8, 10)
    const clock = el.time.slice(11, 16)
    const setMonth = month ===
    '01' ? 'ЯНВАРЬ' : month === '02' ? 'ФЕВРАЛЬ' :
        month === '03' ? 'МАРТ' : month === '04' ? 'АПРЕЛЬ' : month === '05' ? 'МАЙ' :
            month === '06' ? 'ИЮНЬ' : month === '07' ? 'ИЮЛЬ' : month === '08' ? 'АВГУСТ' :
                month === '09' ? 'СЕНТЯБРЬ' : month === '10' ? 'ОКТЯБРЬ' : month === '11' ? 'НОЯБРЬ' : 'ДЕКАБРЬ'
    const map = `https://www.google.ru/maps/search/${el.address},+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8921116,74.576418,15z/data=!3m1!4b1`

    return (
        <div className="card col-3 col-4 col-6 col-12">
            <div className="card__image-div">
                <Link to="/cardDetails" className="card__image-link">
                    <img src={el.img} alt="card" className="card__image"/>
                </Link>
                <div className='card__subtitle'>
                        <div className="card__title1">{`${el.name}`}</div>
                        <div className="_icon-calender card__calender"><span>{day}</span></div>
                        <div className="card__title">{`${day} ${setMonth} ${clock}`}</div>
                        <div className="card__currency">C</div>
                        <div className="card__title">{`${el.price} сом`}</div>
                        <a href={map} className="card__row">
                            <FontAwesomeIcon icon={faLocationDot} className='card__location-icon'></FontAwesomeIcon>
                            <div className="card__location">{el.address}</div>
                        </a>
                </div>


            </div>
        </div>
    );
};

export default Card;