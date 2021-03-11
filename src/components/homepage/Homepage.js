import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import Banner from '../banner/banner';
import Details from '../details/Details';
export default function Homepage() {
    return (
        <>
            <Header>
                <Navigation />
                <Banner />
            </Header>
            <Details />
        </>
    );
}
