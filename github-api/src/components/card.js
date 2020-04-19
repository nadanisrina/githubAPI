import React from 'react'

const Card = (props) => {
    return(
        <div className="wrapper">
            <div className="card">
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Card;