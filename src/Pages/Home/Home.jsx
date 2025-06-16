import React from 'react';
import Banner from '../../Components/Banner/Banner';

import PopularBooks from '../../Components/PopularBooks/PopularBooks';
import FeaturedCategories from '../../Components/FeaturedCategories/FeaturedCategories';
import TopReviewers from '../../Components/TopReviewers/TopReviewers';
import TopReviewedBooks from '../../Components/TopReviewedBooks/TopReviewedBooks';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <FeaturedCategories></FeaturedCategories>
            <TopReviewers></TopReviewers>
            <TopReviewedBooks></TopReviewedBooks>
        </div>
    );
};

export default Home;