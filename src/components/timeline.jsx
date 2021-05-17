import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  //we need to get the logged in user's photos
  const { photos } = usePhotos(user);

  // on loading the photos, we neend to use react skeleton
  // if we have photos, render them(create a post component)
  // if the user has no photos, tell them to create some

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
