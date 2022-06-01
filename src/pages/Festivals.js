import React, {useEffect} from 'react';
import Card from "../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../redux/actions/actions";

const Festivals = () => {
    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)
    useEffect(() => {
        dispatch(getAbout())
    }, [dispatch])

    return (
        <div className="all">
            <div className="all__container">
                <div className="title">Все мироприятия</div>
                <div className="all__card">
                    {
                        allItems.map(el => (
                            <Card key={el.id} el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Festivals;