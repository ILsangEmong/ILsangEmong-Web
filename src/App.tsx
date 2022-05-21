import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from "react";
import axios from "axios"

function App() {
  const [beerBarList, setBeerBarList]=useState([]);

  async function 근처맥주집가져오기() {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword?radius=20000",
      {
        headers: {
          Authorization: `${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          x: 126.8874295,
          y: 37.5205846,
          radius: 1000,
          query: '맥주',
        }
      }
    );

    setBeerBarList(result.data.documents); //documents 객체 넣어주기 
  }

  useEffect(() => {
    근처맥주집가져오기();
  }, []);

  useEffect(() => {
    console.log(beerBarList);
  }, [beerBarList]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
