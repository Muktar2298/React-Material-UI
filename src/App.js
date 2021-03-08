import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import News from "./components/News/News";
import { useState,useEffect } from "react";
import axios from "axios";

function App() {

  // --Data load using fetch --//
   const [articles, setArticles] = useState([]);
  //  useEffect(() => {
  //    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0213b1c28fde41868decb2845a6e7db3';
  //    fetch(url)
  //    .then(response => response.json())
  //    .then(data => setArticles(data.articles));
  //  }, [])

   useEffect(() => {
     const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0213b1c28fde41868decb2845a6e7db3';
     axios(url)
     .then(data => setArticles(data.data.articles));
   }, [])
  //  --return --//
  return (
    <div>
        <h2>Headlines : {articles.length}</h2>

        
        {/* -- Dynamically read data or  map  the articles-- */}
        {
         articles.map(article => <News article={article}></News>)  //--pass article to News Component --//
        }
    </div>
  );
}

export default App;
