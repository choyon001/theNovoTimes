import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCategoryCard from './../NewsCategoryCard';

const NewsCategory = () => {
    const {data:news} = useLoaderData();
    return (
        <div>
            <h1 className='font-semibold'>Novo News Home </h1>
            <p className='text-sm mt-4'>({news.length}) news found on this category</p>
            <div>
                {
                    news.map((singleNews)=>(
                        <NewsCategoryCard singleNews = {singleNews}key={singleNews._id}></NewsCategoryCard>
                    ))
                }
            </div>
        </div>
    );
};

export default NewsCategory;