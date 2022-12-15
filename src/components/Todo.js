import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export const Todo = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    const deletehandler = () => {
        setmodalIsOpen(true);

    };
    return (
        <div className="card">
            <h2 style={{ color: 'black' }}>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deletehandler}>
                    Delete
                </button>

            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen ? <Backdrop /> : null}
        </div>
    );
};
