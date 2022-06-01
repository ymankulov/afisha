import React, {useEffect} from 'react';
import Card from "../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../redux/actions/actions";
import '../pages/style/All.css'
import '../pages/style/Card.css'

const Free = () => {
    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)
    useEffect(() => {
        dispatch(getAbout())
    }, [dispatch])

    return (
        <div id="all">
            <div className="all__container">
                <div className="title">Все мироприятия</div>
                <div className='all__card1'>
                    <div className="all__card">
                        {
                            allItems.map(el => (
                                <Card key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Free;