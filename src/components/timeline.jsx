import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import LoggedInUserContext from "../context/logged-in-user";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  //we need to get the logged in user's photos
  const { photos } = usePhotos(user);

  return (
    <div className="container col-span-2">
      {!photos ? (
        // on loading the photos, we neend to use react skeleton
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        // if we have photos, render them(create a post component)
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
