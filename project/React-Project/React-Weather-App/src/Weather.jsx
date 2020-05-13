import React from "react";
import axios from "axios";

const Styles = {
  cardMain: {
    background: "transparent",
    border: "2px solid black",
    boxShadow: "2px 6px 8px darkblue",
    width: 400,
    height: 400,
    borderRadius: 10,
    marginTop: 10
  },
  searchBtn: {
    border: "1px solid black",
    boxShadow: "2px 4px 8px darkblue",
    marginLeft: 10,
    color: "white"
  },
  inputTag: {
    borderRadius: 4,
    padding: 7,
    border: "1px solid black",
    boxShadow: "2px 4px 8px darkblue",
    outline: "none"
  },
  heading: {
    marginTop: 20,
    marginBottom: 20
  },
  displayCard: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  }
};

class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: "",
      data: {
        name: "",
        temp: "",
        cloud: "",
        minTemp: "",
        maxTemp: "",
        pressure: "",
        humidity: "",
        sunset: "",
        sunrise: "",
        country: "",
        wind: ""
      },
      isLoading: false
    };
  }
  handleSearch = () => {
    this.setState({ isLoading: true });
    this.setState({ value: this.state.search });
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?&units=metric&APPID=409dc801f22f69fa984ead1d03d12f8f",
        {
          params: {
            q: this.state.search
          }
        }
      )
      .then(data1 => {
        console.log(data1);
        this.setState({
          data: {
            name: data1.data.name,
            temp: data1.data.main.temp,
            cloud: data1.data.weather[0].description,
            minTemp: data1.data.main.temp_min,
            maxTemp: data1.data.main.temp_max,
            pressure: data1.data.main.pressure,
            humidity: data1.data.main.humidity,
            sunset: data1.data.sys.sunset,
            sunrise: data1.data.sys.sunrise,
            country: data1.data.sys.country,
            wind: data1.data.wind.speed
          },
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

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=409dc801f22f69fa984ead1d03d12f8f"
      )
      .then(data1 => {
        console.log(data1);
        this.setState({
          data: {
            name: data1.data.name,
            temp: data1.data.main.temp,
            cloud: data1.data.weather[0].description,
            minTemp: data1.data.main.temp_min,
            maxTemp: data1.data.main.temp_max,
            pressure: data1.data.main.pressure,
            humidity: data1.data.main.humidity,
            sunset: data1.data.sys.sunset,
            sunrise: data1.data.sys.sunrise,
            country: data1.data.sys.country,
            wind: data1.data.wind.speed
          },
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  render() {
    const {
      name,
      temp,
      minTemp,
      maxTemp,
      country,
      wind,
      humidity,
      pressure,
      sunrise,
      sunset,
      cloud
    } = this.state.data;

    return (
      <>
        <div>
          <h4 style={Styles.heading}>Current weather about your city</h4>
          <div style={{ marginBottom: 20 }}>
            <input
              style={Styles.inputTag}
              value={this.state.search}
              onChange={e => {
                this.setState({ search: e.target.value });
              }}
              placeholder="enter your city name"
            />
            <button
              style={Styles.searchBtn}
              className="btn"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {this.state.isLoading ? (
          <div
            class="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        <div style={Styles.displayCard}>
          <div style={Styles.cardMain}>
            {this.state.data ? (
              <>
                <h4 style={{ marginTop: 10 }}>
                  {name} , {country}
                </h4>
                <img
                  width="60"
                  height="60"
                  src="https://static.appvn.com/a/uploads/thumbnails/072014/chronus-galaxy-s5-icon-white_icon.png"
                  alt="weather"
                />
                <h1 style={{ fontSize: 44 }}>
                  {temp} <sup>o</sup>C
                </h1>
                <h4>Cloudiness : {cloud}</h4>
                <h4>
                  Min Temp : {minTemp} <sup>o</sup>C
                </h4>
                <h4>
                  Max Temp : {maxTemp} <sup>o</sup>C
                </h4>
                <h4>Pressure : {pressure} hpa</h4>
                <h4>Humidity : {humidity} %</h4>
                <h4>Wind : speed- {wind} m/s</h4>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Axios;
