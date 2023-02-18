import React, { useEffect } from "react";
import '../../pages/css/Portafolio.scss';

export default function PageDetails({ title, subTitle, description, icon }) {

    useEffect(() => {
    }, [icon, subTitle])

    return (
        <div className="top">
            <div className='title'>
                {icon &&
                    <div className='icon'>
                        {icon}
                    </div>
                }
                <div>
                    <span>{title ? title : ''}</span>
                    <h1>{subTitle ? subTitle : ''}</h1>
                </div>
            </div>
            {description ?
                <p>{description}</p>
                :
                null
            }
        </div>
    );
}
