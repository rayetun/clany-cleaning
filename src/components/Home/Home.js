import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import Service from '../Service/Service';
import AboutUs from '../AboutUs/AboutUs';
import Review from '../Review/Review';
import TeamMember from '../TeamMember/TeamMember';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Service></Service>
            <AboutUs></AboutUs>
            <Review></Review>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;