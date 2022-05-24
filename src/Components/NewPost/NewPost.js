import React, {useState} from 'react';
import close from '../../assets/img/close.png'
import {useNavigate} from "react-router";
import './NewPost.css'

const NewPost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        content: ''
    })
    const handleClickClose = ()=>navigate('/');
    const changeForm = (e)=>{
        const {name, value} = e.target;
       setForm(prevState => ({...prevState, [name]: value}))
    }

    const submitForm =(e)=>{
     e.preventDefault();
     const formData = new FormData(e.target);
     fetch('http://localhost:7777/posts',{
             method: 'POST',
             body: formData,
         }).then(()=>handleClickClose())
    }

    return (
        <form onSubmit={submitForm} className='form-post'>
            <img onClick={handleClickClose} className='form-close' src={close} alt="close"/>
            <label className='form-label'>
                <span className='form-span'>Ваше имя:</span>
                <input value={form.name} name='name' className='form-input' type="text" onChange={changeForm}/>
            </label>
            <label className='form-label'>
                <span className='form-span'>Публикация</span>
                <textarea value={form.content} name='content' rows='7' required className='form-input' placeholder='текст...' onChange={changeForm}/>
            </label>
            <div className='btn-container'>
                <button className='form-btn'>Опубликовать</button>
            </div>
        </form>
    );
};

export default NewPost;