import React, {useState, useContext} from 'react';
import {useNavigate, useParams} from "react-router";
import close from "../../assets/img/close.png";
import activePostContext from "../../context/activePostContext";
import './ChangePost.css'

const ChangePost = () => {
    const navigate = useNavigate();
    const {content} = useContext(activePostContext);
    const {id}=useParams();
    const handleClickClose = (id)=>navigate(`/posts/${id}`)
    const [text, setText] = useState(content)
    const changeForm = (e)=>{
        const {value} = e.target;
        setText(value)
    }
    const handleClickSave = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch(`http://localhost:7777/posts/${id}`,{
            method: 'PUT',
            body: formData
        })
            .then(()=>navigate(`/posts/${id}`))
    }

    return (
        <form onSubmit={handleClickSave} className='form-change'>
            <div className="header">
                <div className="header-title">Редактировать публикацию</div>
                <img onClick={()=>handleClickClose(id)} className='header-close' src={close} alt="close"/>
            </div>
            <textarea onChange={changeForm} name="content" rows='5' placeholder='текст...' required className='form-change_input' value={text} />
            <button className='form-btn btn-save'>Save</button>
        </form>
    );
};



export default ChangePost;