import React from 'react';
import mess1 from './You-are-what-you-eat.jpg';
import mess2 from './fposter,small,wall_texture,product,750x1000.jpg';
import mess3 from './healthy-lifestyle.jpg';
import mess4 from './Meal-Plan-BLOG-2.jpg';
import mess5 from './11257964.png';


const Messages = () => {
    return (
        <section className="brands flex flex-row flex-wrap basis-1/6 md:basis-1/5 justify-around content-center py-5 mb-5">
            <img style={{width: "140px"}} src={mess1} alt="you are what you eat"/>
            <img style={{width: "110px"}} src={mess2} alt="m2"/>
            <img style={{width: "240px"}} src={mess3} alt="uber"/>
            <img style={{width: "100px"}} src={mess4} alt="netflix"/>
            <img style={{width: "130px"}} src={mess5} alt="airbnb"/>
        </section>
    );
};

export default Messages;