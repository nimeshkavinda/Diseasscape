const users = [
  {
    id: 1,
    fullName: "Nimesh Kavinda",
    status:
      "Software engineer and a public volunteer dedicated to ensuring public well being. I regularly organize environment cleanup events",
    address: {
      number: "148/A",
      street: "Horana road",
      city: "Padukka",
      district: "Colombo",
      province: "Western Province",
    },
    phone: "0716956139",
    posts: [
      {
        id: 1,
        title: "Possibly a dengue breeding site",
        description:
          "Possible dengue breeding site and requires quick actions to clean this up as this could further worsen the situation",
        type: "dengue",
        date: "Fri 18 March, 2022",
        images: [
          {
            id: 1,
            src: "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-07/uoLiGb39ZN.jpg",
          },
          {
            id: 2,
            src: "https://caricom.org/wp-content/uploads/stagnant-water.jpg",
          },
          {
            id: 3,
            src: "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-07/uoLiGb39ZN.jpg",
          },
          {
            id: 4,
            src: "https://us.biogents.com/wp-content/uploads/mosquito-breeding-site-vase.jpg",
          },
        ],
        location: { name: "Padukka", vicinity: "Padukka" },
        latLng: {
          latitude: 6.824,
          longitude: 80.084,
        },
        postedBy: {
          id: 1,
          fullName: "Nimesh Kavinda",
          profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
        },
      },
      {
        id: 2,
        title: "Could be dengue here",
        description:
          "Lorem ipsum dolor sit amet conqe dolor lorem ipsum dolor sit amet",
        type: "dengue",
        date: "Fri 18 March, 2022",
        images: [
          {
            id: 1,
            src: "https://www.odomosprotect.com/img/article/23-what-are-the-most-common-mosquito-breeding-sites.jpg",
          },
          {
            id: 2,
            src: "https://us.biogents.com/wp-content/uploads/mosquito-breeding-site-vase.jpg",
          },
          {
            id: 3,
            src: "https://us.biogents.com/wp-content/uploads/mosquito-breeding-site-pot.jpg",
          },
          {
            id: 4,
            src: "https://us.biogents.com/wp-content/uploads/mosquito-breeding-site-vase.jpg",
          },
        ],
        location: { name: "Udumulla", vicinity: "Udumulla" },
        latLng: {
          latitude: 6.835,
          longitude: 80.09,
        },
        postedBy: {
          id: 1,
          fullName: "Nimesh Kavinda",
          profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
        },
      },
      {
        id: 4,
        title: "Not very clean place",
        description: "Mosquitos might breed here in rainy season",
        type: "dengue",
        date: "Fri 18 March, 2022",
        images: [
          {
            id: 1,
            src: "https://caricom.org/wp-content/uploads/stagnant-water.jpg",
          },
          {
            id: 2,
            src: "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-07/uoLiGb39ZN.jpg",
          },
          {
            id: 3,
            src: "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-07/uoLiGb39ZN.jpg",
          },
          {
            id: 4,
            src: "https://us.biogents.com/wp-content/uploads/mosquito-breeding-site-vase.jpg",
          },
        ],
        location: { name: "Padukka", vicinity: "Padukka" },
        latLng: {
          latitude: 6.829,
          longitude: 80.08,
        },
        postedBy: {
          id: 1,
          fullName: "Nimesh Kavinda",
          profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
        },
      },
    ],
    events: [
      {
        id: 1,
        title: "Cleanup mosquito breeding sites",
        description:
          "Let's get together to clean up mosquito breeding sites in Padukka. Everyone is welcome to join hands with us",
        date: "Thu 17 March, 2022",
        time: "8.00 am",
        location: {
          name: "Udumulla",
          vicinity: "Padukka",
        },
        latLng: {
          latitude: 6.84,
          longitude: 80.0891,
        },
        organizer: {
          id: 1,
          fullName: "Nimesh Kavinda",
          profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
        },
        participants: [
          { id: 2, fullName: "John Doe" },
          { id: 3, fullName: "Elon Musk" },
          { id: 4, fullName: "Gotabaya Rajapaksha" },
        ],
      },
    ],
    going: [
      {
        id: 1,
        title: "Cleanup mosquito breeding sites",
        description:
          "Let's get together to clean up mosquito breeding sites in Padukka. Everyone is welcome to join hands with us",
        date: "Thu 17 March, 2022",
        time: "8.00 am",
        location: {
          name: "Udumulla",
          vicinity: "Padukka",
        },
        latLng: {
          latitude: 6.84,
          longitude: 80.0891,
        },
        organizer: {
          id: 1,
          fullName: "Nimesh Kavinda",
          profileImg: "https://avatars.githubusercontent.com/u/44240093?v=4",
        },
        participants: [
          { id: 2, fullName: "John Doe" },
          { id: 3, fullName: "Elon Musk" },
          { id: 4, fullName: "Gotabaya Rajapaksha" },
        ],
      },
    ],
  },
];

export default users;
