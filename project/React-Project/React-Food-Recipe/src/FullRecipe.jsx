import React from "react";

const Styles = {
  cardMain: {
    background: "#B2F3AF",
    border: "2px solid black",
    boxShadow: "2px 6px 8px #454442",
    borderRadius: 10,
    width: 400,
    margin: 20,
    padding: 10
  },
  displayCard: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column"
  },
  imgStyle: {
    width: 120,
    height: 120,
    borderRadius: "50%"
  },
  linkStyle: {
    backgroundColor: "#B2F3AF",
    padding: "8px 12px",
    marginTop: 6,
    border: "1px solid black",
    borderRadius: 4,
    textDecoration: "none",
    color: "black"
  }
};

export default class FullRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      recipe: false
    };
  }

  render() {
    const { value, index } = this.props;
    return (
      <div>
        <div style={Styles.cardMain}>
          <h4 style={{ margin: 10 }}>{value[index].recipe.label}</h4>
          <div style={{ display: "flex" }}>
            <img
              style={Styles.imgStyle}
              src={value[index].recipe.image}
              alt={value[index].recipe.label}
            />
            <div style={{ textAlign: "left", marginLeft: 10 }}>
              <p>
                <span style={{ fontWeight: "bold" }}>Diet-label:</span>
                {value[index].recipe.dietLabels[0]}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}> Health-label:</span>
                {value[index].recipe.healthLabels.map(ele => (
                  <span key={ele}> {ele}</span>
                ))}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}> Calories:</span>{" "}
                {value[index].recipe.calories.toFixed(2)} kcal
              </p>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <h4 style={{ margin: 10 }}>Ingredients:</h4>
            <ol>
              {value[index].recipe.ingredientLines.map(ele => (
                <li key={ele}>{ele}</li>
              ))}
            </ol>
          </div>

          <a
            style={Styles.linkStyle}
            href={value[index].recipe.url}
            target="_blank"
          >
            see full recipe
          </a>
        </div>
      </div>
    );
  }
}
