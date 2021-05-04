import NewTweet from "../components/NewTweet";
import Tweet from "../components/Tweet";
import "../styles.css";
import "../styles/tweets.css";
import img from "../img/pp.png";

const db = [
  {
    username: "merdo",
    tweets: ["Hello world", "Kim gerldi?"]
  },

  {
    username: "buket",
    tweets: ["Hello world 2", "Kim gerldi? 2"]
  },

  {
    username: "anil",
    tweets: ["Hello world 3", "Kim gerldi? 3"]
  },

  {
    username: "anil",
    tweets: ["Hello world 3", "Kim gerldi? 3"]
  },

  {
    username: "anil",
    tweets: ["Hello world 3", "Kim gerldi? 3"]
  },

  {
    username: "anil",
    tweets: ["Hello world 3", "Kim gerldi? 3"]
  },

  {
    username: "anil",
    tweets: ["Hello world 3", "Kim gerldi? 3"]
  }
];

function HomePage() {
  return (
    <div className="tweet_div">
      <NewTweet />
      <ul className="list-group tweets_ul">
        {db.map((item) => (
          <div className="tweet_pp_div" key={item.username}>
            <img className="tweet_pp" src={img}/>
            <Tweet username={item.username} tweet={item.tweets} />
          </div>
          
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
