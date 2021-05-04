import "../styles/tweet.css";

export default function Tweet({ tweet,username }) {
  return (
    <div className="list-group-item tweet">
      <h6 className="tweet-item">@{username}</h6>
      <p className="tweet-item">{tweet}</p>
    </div>
  )
}
