import React from 'react';

export default function DetailsCard({ img, heading, info }) {
    return (
        <div className="details__card">
            <div className="details__img">
                <img src={img} alt="illustration" />
            </div>
            <div className="details__desc">
                <h3>{heading}</h3>
                <p>{info}</p>
                <button type="button">Learn More</button>
            </div>
        </div>
    );
}
