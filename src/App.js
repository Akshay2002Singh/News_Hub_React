import Nav from './components/Nav';
import Loader from './components/Loader';
import Card from './components/Card';
import Tooltip from './components/Tooltip';
// App.css contains whole css of project 
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [cur_art, set_cur_art] = useState([])
  const [loader, set_loader] = useState("block")
  const [container, set_container] = useState("")
  const [dis_tooltip,set_dis_tooltip] = useState("none")
  const [tooltip_data,set_tooltip_data] = useState({})
  const [heading,set_heading] = useState("CODING")
  useEffect(() => {
    news()
  }, [])



  function news(news_type) {
    let url;
    // console.log(news_type);
    if (news_type === undefined) {
      url = `https://newsapi.org/v2/everything?q=coding&language=en&sortBy=publishedAt&apiKey=c897f5fb6033410aa1144ceb23d6b24e`;
      set_heading("CODING")
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=in&category=${news_type}&language=en&apiKey=04e521e4245a4c9aab26ff4a6bf22b08`;
      set_heading(news_type.toUpperCase())
    }
    fetch_news(url)
  }

  // function to fetch and show news 
  function fetch_news(url) {
    set_container("none")
    set_loader("block")
    // fetch data using backend
    fetch("https://apiinvoker.pythonanywhere.com/api/", {
      method: "POST",
      body: JSON.stringify({
        'api': url
      })
    })
      .then((response) => response.json())
      .then((data) => {
        set_cur_art(data.articles)
        set_loader("none")
        set_container("")
      });
  }

  const news_list = cur_art.map((cur, index) => {
    return <Card curr={cur} index={index} tooltip={tooltip} />
  })

  function tooltip(index){
    set_dis_tooltip("flex")
    set_tooltip_data(cur_art[index])
  }

  return (
    <>
      <Nav change_cat={news} fetch_news={fetch_news} set_heading={set_heading} />
      <h1 id="main_heading">{heading}</h1>
      <Loader dis={loader} />
      <Tooltip data= {tooltip_data} set_dis_tooltip={set_dis_tooltip} dis_tooltip={dis_tooltip} />
      <div id="container" style={
        {
            display : container,
        }
    }>
        {news_list}
      </div>
    </>
  );
}

export default App;
