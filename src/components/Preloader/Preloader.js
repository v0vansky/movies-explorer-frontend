import React from 'react';
import './Preloader.css';

const Preloader = ({ isGlobal }) => {
    return (
        <div className={`preloader${isGlobal ? ' preloader_type_global' : ''}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader;