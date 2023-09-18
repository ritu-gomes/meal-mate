import React from 'react';
import Hero from '../Hero/Hero';
import Messages from '../Message/Messages';
import CalorieCalculator from '../CalorieCalculator/CalorieCalculator';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Messages></Messages>
            <CalorieCalculator></CalorieCalculator>
            <Contact>s</Contact>
        </div>
    );
};

export default Home;