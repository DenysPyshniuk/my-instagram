// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "9DmC3x7WtMcZ788RcC8iN7EHU9G3",
      username: "karl",
      fullName: "Karl Hadwen",
      emailAddress: "karlhadwen@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
      followers: ["9DmC3x7WtMcZ788RcC8iN7EHU9G3"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["9DmC3x7WtMcZ788RcC8iN7EHU9G3"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["9DmC3x7WtMcZ788RcC8iN7EHU9G3"],
      dateCreated: Date.now(),
    },
    {
      userId: "Rn6zfClDYpXhQdJsWlWwpGHvDdv1",
      username: "den",
      fullName: "Denys Pyshniuk",
      emailAddress: "devronder@gmail.com",
      following: [],
      followers: ["9DmC3x7WtMcZ788RcC8iN7EHU9G3", "2", "1"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "Rn6zfClDYpXhQdJsWlWwpGHvDdv1",
        imageSrc: `/images/users/den/${i}.jpg`,
        caption: "British Columbia, Canada",
        likes: [],
        comments: [
          {
            displayName: "steve",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
          {
            displayName: "den",
            comment: "Absolutley!",
          },
        ],
        userLatitude: "49.313205°",
        userLongitude: "-123.076950°",
        dateCreated: Date.now(),
      });
  }
}
