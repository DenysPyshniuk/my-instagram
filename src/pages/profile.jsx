import { useParams, useHistory } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();
  console.log("username", username);

  return <p>Hello</p>;
}
