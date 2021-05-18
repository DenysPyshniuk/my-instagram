import { useState, useEffect } from "react";
import { getPhotos } from "../services/firebase";

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      // does the user actually follow people?
      if (user?.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);
        //re-arrange array to be newest photos first by dateCreated
        followedUserPhotos.sort((a, b) => b.dataCreated - a.dataCreated);
        setPhotos(followedUserPhotos);
      }
    }

    getTimelinePhotos();
  }, [user?.userId, user.following]);

  return { photos };
}
