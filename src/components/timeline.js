import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  //we need to get the logged in user's photos
  const { photos } = usePhotos();

  console.log("photos", photos);
  // on loading the photos, we neend to use react skeleton
  // if we have photos, render them(create a post component)
  // if the user has no photos, tell them to create some

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <Skeleton key={index} count={1} width={320} height={400} />
          ))}
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => <p key={content.docId}>{content.imageSrc}</p>)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos! </p>
      )}
    </div>
  );
}
