import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShows } from "../actions";

import { LinearProgress } from "@material-ui/core";
import CardComponent from "./Card";

const ShowList = ({ fetchShows, shows }) => {
  const renderShows = () => {
    if (shows.length < 1) {
      return <LinearProgress style={{ width: "100vw" }} />;
    }

    return shows.map(({ show }) => {
      return (
        <React.Fragment key={show.id}>
          <CardComponent
            name={show.name}
            image={
              show.image
                ? show.image.original
                : "https://azharfitnesscenter.com/images/nopic.png"
            }
            premiered={show.premiered}
            genres={show.genres}
            summary={show.summary}
          />
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    fetchShows("warrior");
  });

  return (
    <React.Suspense>
      <div className='result-list'>{renderShows()}</div>
    </React.Suspense>
  );
};

const mapStateToProps = ({ shows }) => {
  return {
    shows: shows.length > 0 ? shows[0] : [],
  };
};

export default connect(mapStateToProps, {
  fetchShows,
})(ShowList);
