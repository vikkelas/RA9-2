import React, {useState} from 'react';
import activePostContext from "../../context/activePostContext";



const ActivePostProvider = (props) => {
    const[name, setName] = useState('')
    const[content, setContent] = useState('')
    const[created, setCreated] = useState('')

    const handleContent = (id)=>{
        fetch(`http://localhost:7777/posts/?id=${id}`)
            .then(response=>response.json())
            .then((data)=>{
                setContent(data.content);
                setCreated(data.created);
                setName(data.name)
            })

    }
    return(
        <activePostContext.Provider value={{handleContent, content, created, name}}>
            {props.children}
        </activePostContext.Provider>

    )
};

export default ActivePostProvider;