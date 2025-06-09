import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TopBook from '../../Components/TopBook/TopBook';
import PopularAuthors from '../../Components/PopularAuthors/PopularAuthors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularAuthors></PopularAuthors>
            <TopBook></TopBook>
        </div>
    );
};

export default Home;