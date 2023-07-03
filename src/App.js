import * as React from "react";
import { useRef, useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

const App = () => {
  const [info, setInfo] = useState();
  const fsong = useRef();
  const [filename , setfilename] = useState("")
  const fetchSongData = async () => {
    const url = 'Url link';
    const data = new FormData();
    data.append('audio', fsong.current.files[0]);

    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': 'Api key',
        'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com',
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setInfo(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  const active =() =>{
    document.querySelector("input").click()
  }

  return (
    <>
      <div class="container">
          <div class="wrapper">
            <div class="image">
      
            </div>
            <div class="content">
                <div class="icon">
                  <i class="fas fa-cloud-upload-alt"></i>
                </div>
                <div class="text">
                  {!filename &&(
                    <>No file chosen yet!</>
                  )}
                  {filename.name}
                </div>
            </div>
            <div id="cancel-btn">
                <i class="fas fa-times"></i>
            </div>
            <div class="file-name">
                File name here
            </div>
        </div>
        <input id="default-btn" ref={fsong} onChange={(event) => setfilename(event.target.files[0])} type="file"hidden/>
        <button onClick={active} id="custom-btn">Choose a file</button>
        <button onClick={fetchSongData} className="send-btn">Send</button>
      </div>
    </>
  );
};

export default App;
