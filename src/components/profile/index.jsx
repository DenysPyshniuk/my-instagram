import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import {
  getUserByUsername,
  getUserPhotosByUsername,
} from "../../services/firebase";

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = getUserPhotosByUsername(user.username);
      console.log("user", user);
      console.log("photos", photos);
      // dispatch({
      //   profile: user,
      //   photosCollection: photos,
      //   followerCount: user.followers.length,
      // });
    }
    if (user.username) {
      getProfileInfoAndPhotos();
    }
  }, [user.username]);

  return (
    <>
      <Header />
      <p>Hello {user.username}</p>
    </>
  );
}
