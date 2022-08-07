import React from "react";
import { useState } from "react";
import s from "./CSS/Post.module.css";

export default function Post() {
  const [comment, setComment] = useState("");
  const [comentariosHechos, setComentariosHechos] = useState([]);

  function handleInputChange(e) {
    e.preventDefault();
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (comment) {
      setComentariosHechos([...comentariosHechos, comment]);
    }
    setComment("");
  }

  return (
    <div className={s.container_post}>
      <div className={s.comments}>
        <p>
          <span className={s.commentSpan}>Comment </span>
          consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et
        </p>
        {comentariosHechos.map((c, index) => (
          <p key={index}>
            {" "}
            <span className={s.commentSpan}>Comment </span> {c}
          </p>
        ))}
      </div>
      <div className={s.div_area}>
        <input
          className={s.input}
          type="text"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          value={comment}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className={s.post}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Post
        </button>
      </div>
    </div>
  );
}
