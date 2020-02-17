import React, { useContext } from 'react';
import Context from '../store/context';
import Style from './pageHeader.module.scss';

const PageHeader = () => {
    const context = useContext(Context);
    const headers = [`Event Count: ${Object.keys(context.events).length}`, ...context.commonHeaders];
    return (
        <div className={Style.container}>
            {headers.map((text, index) => (
                <div className={!index ? Style.redText : ""} key={index}>{text}</div>
            ))}
        </div>
    );
}

export default PageHeader;
