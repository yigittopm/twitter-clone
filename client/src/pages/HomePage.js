import NewTweet from "../components/NewTweet";
import Tweet from "../components/Tweet";
import "../styles.css";
import "../styles/tweets.css";
import img from "../img/pp2.png";

import axios from "axios";
import { useState,useEffect } from "react";

function HomePage() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const data = axios.get("http://localhost:5000/home")
      .then(result => setData(result.data))
  },[]);

  return (
    <div className="tweet_div">
      <NewTweet />
      <ul className="list-group tweets_ul">
        {data.map(item => (
          <div className="tweet_pp_div" key={item.tweet_text}>
            <img className="tweet_pp" src={img} />
            <Tweet username={item.tweet_id} tweet={item.tweet_text}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
