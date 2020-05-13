import React from "react";
import ItemDetails from "./ItemDetails";

export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: 1,
      mode: "cash"
    };
  }

  handleRating = rating => {
    this.setState(
      {
        ratingValue: rating
      },
      () => {
        console.log(this.state.ratingValue);
      }
    );
  };

  handlePayment = mode => {
    this.setState({
      mode: mode
    });
  };

  render() {
    const { data } = this.props;

    const value = data
      .filter(ele => ele.rating >= this.state.ratingValue)
      .filter(ele => ele.paymentMethod === this.state.mode)
      .map(ele => (
        <ItemDetails
          name={ele.name}
          categories={ele.categories}
          votes={ele.votes}
          rating={ele.rating}
          review={ele.review}
          cost={ele.cost}
          minCost={ele.minCost}
          paymentMethod={ele.paymentMethod}
        />
      ));

    return (
      <>
        <h1>restaurant component</h1>
        {value}
        {/* button for rating filtering */}
        <button onClick={() => this.handleRating(1)}>rating 1</button>
        <button onClick={() => this.handleRating(2)}>rating2</button>
        <button onClick={() => this.handleRating(3)}>rating 3</button>
        <button onClick={() => this.handleRating(4)}>rating 4</button>
        <br />
        <br />
        {/* button for payment mode */}
        <button onClick={() => this.handlePayment("cash")}>cash</button>
        <button onClick={() => this.handlePayment("card")}>card</button>
        <button onClick={() => this.handlePayment("upi")}>upi</button>
      </>
    );
  }
}
