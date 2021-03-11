import React from 'react';
import DetailsCard from '../detailsCard/DetailsCard';

import * as images from '../../images/details-images/exportImages';
export default function Details() {
    return (
        <section className="details">
            {images.allImg.map((img) => {
                return (
                    <DetailsCard
                        key={img}
                        img={img}
                        heading="Keep your subs in Sync"
                        info="is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the  standard
                dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type
                specimen book"
                    />
                );
            })}
        </section>
    );
}
