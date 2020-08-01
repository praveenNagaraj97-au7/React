export default (shows = [], action) => {
  switch (action.type) {
    case "FETCH_SHOWS":
      return [...shows, action.payload];
    default:
      return shows;
  }
};
