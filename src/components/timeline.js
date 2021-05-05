import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  //we need to get the logged in user's photos
  const { photos } = usePhotos();
  // on loading the photos, we neend to use react skeleton
  // if we have photos, render them(create a post component)
  // if the user has no photos, tell them to create some

  return (
    <div className="container col-span-2">
      <p>I am the timeline</p>
    </div>
  );
}
