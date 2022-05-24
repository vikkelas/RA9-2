import React from 'react';
import useFetch from "../../hook/useFetch";
import Card from "../Card/Card";
import './HomePage.css';
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const HomePage = () => {
    const navigate = new useNavigate();
    const [data] = useFetch('http://localhost:7777/posts');
    const handleCard = (id)=>navigate(`/posts/${id}`);


    return(
        <>
            <div className="newPost-btn">
                <Link to='/posts/new' className='btn-post'>Создать пост</Link>
            </div>
            <div className='container'>
                {data && data.map(item=><Card click={handleCard} key={item.id} created={item.created} content={item.content} id={item.id} name={item.name}/>)}
            </div>
        </>

    )
};

export default HomePage;