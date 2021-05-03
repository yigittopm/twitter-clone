import NewTweet from "../components/NewTweet";
import Tweet from "../components/Tweet";
import "../styles.css";
import "../styles/tweets.css";

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
    <div>
      <NewTweet />
      <ul className="list-group tweets">
        {db.map((item) => (
          <Tweet key={item.username} tweet={item.tweets} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
