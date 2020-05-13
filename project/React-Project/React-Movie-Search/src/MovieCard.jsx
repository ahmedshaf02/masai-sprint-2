import React from "react";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  render() {
    const { value, func } = this.props;
    return (
      <>
        <div
          style={{
            backgroundColor: "#4E4E4B",
            color: "white",
            borderRadius: 6,
            margin: 30,
            width: 300
          }}
        >
          <img
            style={{ width: 300, height: "" }}
            className="rounded mb-2"
            src={value.Poster}
            alt={value.Title}
          />
          <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
            Title: {value.Title}
          </h5>
          <h5 style={{ fontSize: 16, fontWeight: "bold" }}>
            Year: {value.Year}
          </h5>
          <button
            className="btn btn-primary mb-2"
            onClick={() => func(value.imdbID)}
          >
            More details
          </button>
        </div>
      </>
    );
  }
}

export default MovieCard;
