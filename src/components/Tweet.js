import "../styles/tweet.css";

export default function Tweet({ tweet }) {
  return <li className="list-group-item tweet">{tweet}</li>;
}
