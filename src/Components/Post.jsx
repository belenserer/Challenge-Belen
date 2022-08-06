import React from 'react';
import { useState } from 'react';
import s from './CSS/Post.module.css';

export default function Post(){
    const [comment, setComment] = useState('')
    const [comentariosHechos, setComentariosHechos] = useState([])
    
    function handleInputChange(e){
        e.preventDefault()
        setComment(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault()
        if(comment){
            setComentariosHechos([...comentariosHechos, comment])
        }
        setComment('')
        
    }

    return (
        <div>
            <div className={s.comments}>
                {comentariosHechos.map((c, index) => (
                <p key={index}> Comment {c}</p>))}

            </div>
            <input
            className={s.input}
            type= 'string'
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            value= {comment}
            onChange= {(e)=> handleInputChange(e)}
            />
            <button 
                className={s.post}
                type='submit' 
                onClick= {(e)=> handleSubmit(e)}
            >
                Post
            </button>
        </div>
    )
}

