import { combineReducers } from "redux";

const carListReducer = () => {
  return [
    {
      image:
        "https://i.ndtvimg.com/i/2018-03/2019-audi-a6_827x510_51520600254.jpg",
      name: "Audi A6",
      description:
        "Innovative technologies, progressive design, and exciting versatile equipment options: The Audi A6 Sedan combines these values into an exceptionally sporty and elegant symbiosis. Elegant and progressive at the same time, this versatility and comfort open up a new kind of mobility.",
    },
    {
      image:
        "https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/teaser/1920x1080-teaser-AA8_171002.jpg?imwidth=1920&imdensity=1",
      name: "Audi A8",
      description:
        "Innovative technologies, progressive design, and exciting versatile equipment options: The Audi A6 Sedan combines these values into an exceptionally sporty and elegant symbiosis. Elegant and progressive at the same time, this versatility and comfort open up a new kind of mobility.",
    },
    {
      image:
        "https://audimediacenter-a.akamaihd.net/system/production/media/77766/images/910025eb9db8aea52ec0a693c4e8c2e5d29230ea/A195681_blog.jpg?1595847098",
      name: "Audi A4",
      description:
        "Innovative technologies, progressive design, and exciting versatile equipment options: The Audi A6 Sedan combines these values into an exceptionally sporty and elegant symbiosis. Elegant and progressive at the same time, this versatility and comfort open up a new kind of mobility.",
    },
    {
      image:
        "https://img.indianautosblog.com/2020/04/21/2021-audi-a3-sedan-front-three-quarters-left-side-743e.jpg",
      name: "Audi A3",
      description:
        "Innovative technologies, progressive design, and exciting versatile equipment options: The Audi A6 Sedan combines these values into an exceptionally sporty and elegant symbiosis. Elegant and progressive at the same time, this versatility and comfort open up a new kind of mobility.",
    },
  ];
};

const selectedCarReducer = (selectedCar = null, action) => {
  if (action.type === "SELECT_CAR") return action.payload;

  return selectedCar;
};

export default combineReducers({
  cars: carListReducer,
  selectCar: selectedCarReducer,
});
