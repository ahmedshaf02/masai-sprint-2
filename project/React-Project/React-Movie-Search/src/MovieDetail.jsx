import React from "react";

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: "",
      data: [],
      isLoading: false,
      show: false,
      data2: ""
    };
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <div>
          <h4>Movie Details</h4>
          <div className="container" style={{ color: "#EEF0E1" }}>
            <div className="row justify-content-start">
              <div className="col-12 col-md-6 col-lg-4 mb-2">
                <img
                  style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
                  src={data.Poster}
                  alt={data.Title}
                />
                <h6
                  className="mt-1"
                  style={{ fontSize: 16, fontWeight: "bold" }}
                >
                  Title: {data.Title}
                </h6>

                <h6
                  className="mt-1"
                  style={{ fontSize: 16, fontWeight: "bold" }}
                >
                  Year: {data.Year}
                </h6>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.props.func();
                  }}
                >
                  Go back
                </button>
              </div>

              <div
                style={{
                  backgroundColor: "#434448",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6
                }}
                className="col-12 col-md-6 col-lg-8 text-left"
              >
                <h6
                  className="mt-5 ml-2"
                  style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                >
                  Movie: {data.Title}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Released Date:{" "}
                  </span>
                  {data.Released}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Genre:
                  </span>
                  {data.Genre}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Director:
                  </span>{" "}
                  {data.Director}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Writer:
                  </span>
                  {data.Writer}
                </h6>
                <h6 className="ml-2">
                  {" "}
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Actors:
                  </span>
                  {data.Actors}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Movie Plot:
                  </span>{" "}
                  {data.Plot}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Imdb rating:
                  </span>{" "}
                  {data.imdbRating}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Language:
                  </span>
                  {data.Language}
                </h6>
                <h6 className="ml-2">
                  <span
                    style={{ fontSize: 16, fontWeight: "bold", marginRight: 5 }}
                  >
                    Country:
                  </span>
                  {data.Country}
                </h6>
                <a
                  href={`https://imdb.com/title/${data.imdbID}`}
                  target="_blank"
                  className="btn btn-primary ml-2 mt-2"
                >
                  Go to Imdb page
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
