import { combineReducers } from "redux";

const moviesListReducer = () => {
  return [
    {
      image: "https://pmcdeadline2.files.wordpress.com/2019/05/booksmart-i.jpg",
      title: "Booksmart (2019)",
      info:
        "The story follows Dever and Feldstein's characters, two academic superstars and best friends who, on the eve of their high school graduation, suddenly realize that they should have worked less and played more. Determined never to fall short of their peers, the girls set out on a mission to cram four years of fun into one night.",
    },

    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg",
      title: "Toy Story 4 (2019)",
      info:
        "Woody (voice of Tom Hanks) has always been confident about his place in the world, and that his priority is taking care of his kid, whether that's Andy or Bonnie. So when Bonnie's beloved new craft-project-turned-toy, Forky (voice of Tony Hale), declares himself as 'trash' and not a toy, Woody takes it upon himself to show Forky why he should embrace being a toy",
    },

    {
      image:
        "https://fynestuff.com/wp-content/uploads/2017/12/greta-gerwig-lady-bird-saoirse-ronan.jpg",
      title: "Lady Bird (2017)",
      info:
        "In Lady Bird, Greta Gerwig reveals herself to be a bold new cinematic voice with her directorial debut, excavating both the humor and pathos in the turbulent bond between a mother and her teenage daughter",
    },

    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMWE3MjViNWUtY2VjYS00ZDBjLTllMzYtN2FkY2QwYmRiMDhjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_.jpg",
      title: "The Farewell (2019)",
      info:
        "The film follows a Chinese family who, when they discover their beloved Grandmother has only a short while left to live, decide to keep her in the dark and schedule an impromptu wedding to gather before she passes. Billi, feeling like a fish out of water in her home country, struggles with the family's decision to hide the truth from her grandmother.",
    },
  ];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "SELECT_MOVIE") {
    return action.payload;
  }

  return selectedMovie;
};

export default combineReducers({
  movieslist: moviesListReducer,
  selectedMovie: selectedMovieReducer,
});
