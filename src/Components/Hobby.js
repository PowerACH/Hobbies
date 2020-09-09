import React from 'react';


function Hobby(props) {
    return (
        <div className="wrapper">
            <div className="hobby1">
                <div className="hobbyname">
                    <h2 className="name">{props.name}</h2>
                </div>
                <div className="photo">
                    <img src={props.photo} alt="Hobby" />
                </div>
                <div className="hobbyDesc">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Hobby;