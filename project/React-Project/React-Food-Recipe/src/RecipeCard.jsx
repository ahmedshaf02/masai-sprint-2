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
  }
};

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      recipe: false
    };
  }

  render() {
    const { recipe } = this.props.value;

    if (this.state.recipe) {
      return (
        <div>
          <h1>recipe</h1>
        </div>
      );
    } else {
      return (
        <>
          <div style={Styles.cardMain}>
            <h5>{recipe.label}</h5>
            <img src={recipe.image} alt={recipe.label} />
            <button
              onClick={() => {
                this.setState(() => {
                  this.props.func(this.props.index);
                });
              }}
              style={{
                backgroundColor: "#B2F3AF",
                padding: "8px 12px",
                marginTop: 6,
                border: "1px solid black",
                borderRadius: 4
              }}
            >
              get recipe
            </button>
          </div>
        </>
      );
    }
  }
}

export default RecipeCard;
