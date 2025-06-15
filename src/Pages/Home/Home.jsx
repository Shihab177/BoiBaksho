import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TopBook from '../../Components/TopBook/TopBook';
import PopularAuthors from '../../Components/PopularAuthors/PopularAuthors';
import PopularBooks from '../../Components/PopularBooks/PopularBooks';
import FeaturedCategories from '../../Components/FeaturedCategories/FeaturedCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <FeaturedCategories></FeaturedCategories>
            <PopularAuthors></PopularAuthors>
            <TopBook></TopBook>
        </div>
    );
};

export default Home;