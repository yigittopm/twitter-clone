import "../styles/newTweet.css";
import img from "../img/pp.png";

export default function NewTweet() {
  return (
    <div className="mb-3 newTweet">
      <h2 className="new_tweet_title">What's your happening ?</h2>
      <div className="img_input_div">
        <img className="pp" src={img} />
        <input
          className="form-control mb-1 newTweet_input"
          type="text"
          placeholder="New Tweet"
        />
      </div>
      <button className="btn tw_btn newTweet_btn mb-2">Tweetle</button>
    </div>
  );
}
