import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(function () {
    getDataFromApi()
  }, [])

  function getDataFromApi() {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-19&sortBy=publishedAt&apiKey=a502c4892df7456e908c32e0a8ac631b')
      .then((data) => data.json())
      .then((data) => {
        console.log(data.articles[0]);
        data.articles.map((news) => {
          console.log(news.title);
        })

      })
  }
  return (
    <div className="App">

      <div className="card">
        <img src="" alt="" />
        <div className="card-body">
          <h5 className="card-title">Tittle</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
  );
}

export default App;
