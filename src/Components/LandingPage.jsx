import React from "react";
import { useState } from "react";
import Post from "./Post";
import s from "./CSS/LandingPage.module.css";
import Carousel from "./Carousel";

export default function LandingPage() {
  

  return (
    <div className={s.landing}>
      <div className={s.headerContainer}>
        <div>
          <h5 className={s.picture}>Foto de perfil</h5>
        </div>
        <div>
          <h5 className={s.name}>Nombre de quien postea</h5>
        </div>
        <div>
          <h5 className={s.sitePost}>Lugar del posteo</h5>
        </div>
        <div>
          <Carousel />
        </div>

        <div>Aca van los íconos de corazon, comentar y enviar</div>

        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}
