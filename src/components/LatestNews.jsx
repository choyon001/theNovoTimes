import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex justify-center items-center gap-2 bg-gray-100 p-2'>
            <p className='bg-[#D72050] text-white p-1'>Latest</p>
            <Marquee pauseOnHover = {true} speed={100}>
                <Link to="/news">
                I can be a React component, multiple React components, or just some text.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;