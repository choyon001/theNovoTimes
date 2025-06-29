import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftAside = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories").then(res=>res.json())
        .then(data=>{
            setCategories(data.data.news_category);         
             
        })
    },[])
    return (
        <div>
            <h1 className="font-semibold text-[#403F3F]">All Category({categories.length})</h1>
            <div className="flex flex-col gap-2 mt-4">
                {
                    categories.map(
                        (category)=>(
                            <NavLink to={`category/${category.category_id}`} key={category.category_id} className="btn  border-none">
                                {category.category_name}
                            </NavLink>
                        )
                    )
                }
                
            </div>
        </div>
    );
};

export default LeftAside;