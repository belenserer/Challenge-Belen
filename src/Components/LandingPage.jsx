import React from "react";
import { useState } from "react";
import Post from "./Post";
import s from "./CSS/LandingPage.module.css";
import Carousel from "./Carousel";
import profile from "./Img/profile-pic.png";
import emptyHeart from "./Img/emptyHeart.png";
import comment from "./Img/comment.png";
import send from "./Img/send.png";
import likeHeart from "./Img/likeHeart.png";

export default function LandingPage() {
  const [like, setLike] = useState(false);

  function handleChange(e) {
    setLike(!like);
  }

  return (
    <div className={s.landing}>
      <div className={s.container}>
        <div className={s.header}>
          <img className={s.profile} src={profile} />
          <div className={s.name_city}>
            <p className={s.name}>Erik Dunlop</p>
            <p className={s.sitePost}>San francisco, California</p>
          </div>
        </div>
        <div>
          <Carousel />
        </div>
        <div className={s.description_parent}>
          <div className={s.icons}>
            {like ? (
              <img
                className={s.heart}
                onClick={(e) => handleChange(e)}
                src={likeHeart}
              />
            ) : (
              <img
                className={s.heart}
                onClick={(e) => handleChange(e)}
                src={emptyHeart}
              />
            )}
            <img src={comment} />
            <img src={send} />
          </div>

          <p className={s.description}>
            {" "}
            <span>Lucas Credie</span> dolor sit amet, consectetur adipiscing
            elit. Mi enim ut eu cras ultrices eget et tristique proin. Mi enim
            ut eu cras ultrices eget et tristique proin.{" "}
          </p>
          <Post />
        </div>
      </div>
    </div>
  );
}
