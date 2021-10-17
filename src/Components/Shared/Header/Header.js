import React from 'react';
import Banner from './Banner/Banner';
import NavigationBar from './NavigationBar/NavigationBar';

const Header = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
        </>
    );
};

export default Header;
