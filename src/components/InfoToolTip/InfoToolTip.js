import React from "react";
import "./InfoToolTip.css";

function InfoTooltip(props) {
    function handleClose(event) {
        if (event.target.classList.contains('popup_opened')) {
            props.onClose();
        }
    }
    return (
        <div className={`popup popup_type_tooltip ${props.isOpen ? 'popup_opened' : ''}`} onClick={handleClose}>
            <div className="popup__container">
                {props.isSuccess ? (
                    <>
                        <span className="popup__icon popup__icon_type_success">✓</span>
                        <h2 className="popup__tooltip-message">{props.message}</h2>
                    </>
                ) : (
                    <>
                        <span className="popup__icon popup__icon_type_fail">✕</span>
                        <h2 className="popup__tooltip-message">{props.message}</h2>
                    </>
                )
                }
                <button type="button" className="popup__close-button" onClick={props.onClose}>✕</button>
            </div>
        </div>
    )
}

export default InfoTooltip;