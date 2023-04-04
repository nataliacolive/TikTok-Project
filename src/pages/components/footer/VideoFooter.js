import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h2>@{name}</h2>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic__text">
          <p>{music}</p>
          </div>
        </div>
      </div>
      <img npm install firebase
      className="videoFooter_record"
      alt="imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      
      />
      


    </div>
  );
}

export default VideoFooter;
