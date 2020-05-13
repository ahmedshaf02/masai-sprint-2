import React from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import FullRecipe from "./FullRecipe";

const Styles = {
  displayCard: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  searchInput: {
    width: "50%",
    height: 40,
    fontSize: 18,
    lineHeight: "40px",
    borderRadius: 4,
    boxShadow: "2px 2px 6px gray",
    outline: "none",
    textAlign: "center",
    border: "1px solid #040616"
  },
  buttonSearch: {
    backgroundColor: "#B2F3AF",
    marginLeft: 10
  }
};

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      value: "",
      data: [],
      isLoading: false,
      fullRecipe: false,
      index: ""
    };
  }
  // search function to get api data
  handleSearch = () => {
    if (this.state.search === "") {
      alert("please provide recipe name");
      return;
    }

    this.setState({ isLoading: true });
    this.setState({ value: this.state.search });
    axios
      .get(
        "https://api.edamam.com/search?&app_id=1bbfbd93&app_key=3f3481cd71dc58436ec81db0839e0eda",
        {
          params: {
            q: this.state.search
          }
        }
      )
      .then(data1 => {
        console.log(data1);
        this.setState({
          data: data1.data.hits,
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

  // to call api first on component mount
  componentDidMount() {
    this.setState({
      isLoading: true
    });

    axios
      .get(
        "https://api.edamam.com/search?q=apple&app_id=1bbfbd93&app_key=3f3481cd71dc58436ec81db0839e0eda"
      )
      .then(data1 => {
        console.log(data1);
        this.setState({
          data: data1.data.hits,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  //  function to get detailed recipe of dish
  getRecipe = index1 => {
    this.setState({ fullRecipe: true, index: index1 });
    console.log(index1);
  };

  render() {
    if (!this.state.fullRecipe) {
      return (
        <>
          <div>
            <input
              value={this.state.search}
              onChange={e => {
                this.setState({ search: e.target.value });
              }}
              style={Styles.searchInput}
              placeholder="get your food recipe"
            />
            <button
              style={Styles.buttonSearch}
              className="btn"
              onClick={this.handleSearch}
            >
              search recipe
            </button>
          </div>

          <div style={{ color: "white", margin: 10 }}>
            {this.state.isLoading ? (
              <div
                style={{ width: "3rem", height: "3rem" }}
                class="spinner-border"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div style={Styles.displayCard}>
            {this.state.data.map((ele, index) => (
              <RecipeCard
                value={ele}
                key={ele.recipe.calories}
                func={this.getRecipe}
                index={index}
              />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <div style={Styles.displayCard}>
          <FullRecipe value={this.state.data} index={this.state.index} />;
        </div>
      );
    }
  }
}

export default Recipe;
