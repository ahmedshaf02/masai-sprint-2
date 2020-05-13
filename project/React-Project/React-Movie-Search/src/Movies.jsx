import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import MovieDetail from "./MovieDetail";

class Movies extends React.Component {
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

  // function to get movie data
  handleSearch = () => {
    this.setState({ isLoading: true });
    // this.setState({ value: this.state.search });
    axios
      .get("https://www.omdbapi.com/?&apikey=c2b57a4d", {
        params: {
          s: this.state.search
        }
      })
      .then(data1 => {
        console.log(data1);

        if (data1.data.Response === "False") {
          console.log(data1.data.Error);
          alert(data1.data.Error);
          this.setState({ isLoading: false });
          return;
        }

        this.setState({
          data: data1.data.Search,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error, "error ok");
        alert("error occured please try again");
        this.setState({ isLoading: false });
      })
      .finally(data2 => console.log(data2));
  };

  //function to get detailed about movie
  handleDetail = id => {
    this.setState({ isLoading: true, show: true });

    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=c2b57a4d`)
      .then(data1 => {
        console.log(data1);

        if (data1.data.Response === "False") {
          console.log(data1.data.Error);
          alert(data1.data.Error);
          this.setState({ isLoading: false });
          return;
        }

        this.setState({
          data2: data1.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error, "error ok");
        alert("error occured please try again");
        this.setState({ isLoading: false });
      })
      .finally(data2 => console.log(data2));
  };

  goingBack = () => {
    this.setState({ show: false });
  };

  // on component mount first api call

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    axios
      .get("https://www.omdbapi.com/?s=mission&apikey=c2b57a4d")
      .then(data1 => {
        console.log(data1);

        if (data1.data.Response === "False") {
          console.log(data1.data.Error);
          alert(data1.data.Error);
          this.setState({ isLoading: false });
          return;
        }

        this.setState({
          data: data1.data.Search,
          isLoading: false
        });
      });
  }

  render() {
    return !this.state.show ? (
      <>
        {/* input search box */}
        <div>
          <h1>Movie record search</h1>
          <input
            style={{
              height: 60,
              fontSize: 20,
              margin: 10,
              borderRadius: 40,
              width: "50%",
              outline: "none",
              textAlign: "center"
            }}
            value={this.state.search}
            onChange={e => {
              this.setState({ search: e.target.value });
            }}
            className="border-primary pill"
          />

          <button
            className="btn btn-outline-primary pill"
            onClick={this.handleSearch}
          >
            Search
          </button>
          {/* to display data card */}
          <div>
            {this.state.isLoading ? (
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem", margin: 10 }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              ""
            )}
          </div>
          {this.state.data &&
            this.state.data.map(ele => (
              <div className="row">
                
                  <MovieCard value={ele} func={this.handleDetail} />
                
              </div>
            ))}
        </div>
      </>
    ) : this.state.isLoading ? (
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem", margin: 10 }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <MovieDetail data={this.state.data2} func={this.goingBack} />
    );
  }
}

export default Movies;
