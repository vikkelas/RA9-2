import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({name, content, created,click,id}) => {
    return (
        <div onClick={()=>click(id)} className='card'>
            <div className="name">{name}</div>
            <div className="post">{content}</div>
            <div className="date">Дата: {new Date(created).toLocaleDateString()} Время: {new Date(created).toLocaleTimeString()}</div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    click: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Card;