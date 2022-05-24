import React, {useContext} from 'react';
import {useParams, useNavigate} from "react-router";
import './PostItem.css'
import close from "../../assets/img/close.png";
import activePostContext from "../../context/activePostContext";


const PostItem = (props) => {
    const {content, created, name, handleContent} = useContext(activePostContext);
    const navigate = new useNavigate();
    const {id}=useParams();
    const handleChange = (id)=>navigate(`/postsChange/${id}`)
    const handleClickClose = ()=>navigate('/')
    const handleClickDelet = (id) =>{
        fetch(`http://localhost:7777/posts/${id}`,{
            method: 'DELETE',
        })
            .then(()=>navigate('/'))
    }
    handleContent(id);



    return (
            <div className='card'>
                <img onClick={handleClickClose} className='close' src={close} alt="close"/>
                <div className="name">{name}</div>
                <div className="post">{content}</div>
                <div className="date">Дата: {new Date(created).toLocaleDateString()} Время: {new Date(created).toLocaleTimeString()}</div>
                <div className='btn-container'>
                    <button onClick={()=>handleChange(id)} className='btn-post'>Изменить</button>
                    <button onClick={()=>handleClickDelet(id)} className='btn-post btn-post-red'>Удалить</button>
                </div>
            </div>
    )
};



export default PostItem;