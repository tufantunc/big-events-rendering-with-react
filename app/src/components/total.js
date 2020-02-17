import React, { useContext } from 'react';
import Context from '../store/context';
import Style from './total.module.scss';

const Total = () => {
    const context = useContext(Context);
    const eventKeys = Object.keys(context.selectedEvents);
    const total = eventKeys.reduce((total,current) => total * parseFloat(context.selectedEvents[current].O), 1);
    const totalStr = eventKeys.length > 0 ? total.toFixed(2) : 0;
    return (
        <div className={Style.totalContainer}>
            {
                eventKeys.map((bulten, index) => (
                    <div key={index}>
                        <p><span>4</span> <span>Kod: {bulten}</span> <span>Maç: {context.selectedEvents[bulten].N}</span></p>
                        <p><span>Oran: {context.selectedEvents[bulten].O}</span> <span>MBS: {context.selectedEvents[bulten].MBS}</span></p>
                    </div>
                ))
            }
            <p>Toplam Tutar: {totalStr}</p>
        </div>
    );
}

export default Total;