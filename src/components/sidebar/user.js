import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function User({ username, fullName }) {
  return <p>I'm a user</p>;
}

User.PropTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
