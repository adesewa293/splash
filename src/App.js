import { useState } from "react";
import "./App.css";
import axios from "axios"

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [img, setImg] = useState("")

function handleSearch(event){
 setSearchQuery(event.target.value);
}

async function getImage() {
 const API = `http://localhost:8090/photos?subject=${searchQuery}`;
 const res = await axios.get(API)
 console.log('res.data', res.data)
 setImg(res.data[0].img_url)
}

  return (
    <div className="App">
      <h1>find any image</h1>
      <input type="text" placeholder="enter image subject" onChange={handleSearch}/>
      <button onClick={getImage}>EXPLORE!</button>
      {img && <img src={img} alt={searchQuery}/>}
    </div>
  );
}

export default App;
