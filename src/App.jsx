import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [AllData, setAllData] = useState([]);
  let [input, setinput] = useState("");

  useEffect(function () {
    getDataFromApi()
  }, [])

  function getDataFromApi() {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-30&sortBy=publishedAt&apiKey=a502c4892df7456e908c32e0a8ac631b')
      .then((data) => data.json())
      .then((data) => setAllData(data.articles))

  }
  console.log(AllData);
  if (!AllData.length) {
    return <h1>loading...</h1>
  }
  return (


    <div className="App">

      <div className='navDiv sticky-top navbar-expand-lg'>
        <div>
          <h1 id='Logo'>NEWS</h1>
        </div>
        <div className='inpBtn'>
          <input type="text" placeholder='Search' name="" id="input" />
          <button id='searchbtn'>Search</button>
        </div>
      </div>
      <div className="CardDiv row">
        {AllData.map((AllNews, index) => (
          <div className="card col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <img src={AllNews.urlToImage} className='Image' alt={AllNews.title} />
            <div className="card-body ">
              <h5 className="card-title">{AllNews.title}</h5>
              <p className="card-text" id='description'>{AllNews.description}</p>
              <a href={AllNews.url} className="btn btn-primary">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;