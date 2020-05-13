import React from "react";
import "./styles.css";
import RestaurantDetails from "./RestaurantDetails";

const data = [
  {
    name: "Lajij Day",
    categories: "Continental,Pizza, Asian",
    votes: "466 votes",
    review: "442 reviews",
    rating: 4.2,
    cost: 500,
    minCost: "50/- only",
    paymentMethod: "cash",
    paymentMethodMode: {
      card: false,
      cash: true,
      upi: true,
      all: true
    }
  },
  {
    name: "Cafe Good",
    categories: "Continental,Pizza, Asian",
    votes: "466 votes",
    review: "442 reviews",
    rating: 4.5,
    cost: 200,
    minCost: "50/- only",
    paymentMethod: "cash",
    paymentMethodMode: {
      card: false,
      cash: true,
      upi: true,
      all: true
    }
  },
  {
    name: "Pefect Match",
    categories: "Continental,Pizza, Asian",
    votes: "466 votes",
    review: "442 reviews",
    rating: 2.4,
    cost: 500,
    minCost: "50/- only",
    paymentMethod: "cash",
    paymentMethodMode: {
      card: false,
      cash: true,
      upi: true,
      all: true
    }
  },
  {
    name: "Hungry Day",
    categories: "Continental,Pizza, Asian",
    votes: "466 votes",
    review: "442 reviews",
    rating: 4.0,
    cost: 400,
    minCost: "50/- only",
    paymentMethod: "cash",
    paymentMethodMode: {
      card: false,
      cash: true,
      upi: true,
      all: true
    }
  },
  {
    name: "Biryani Special",
    categories: "Continental,Pizza, Asian",
    votes: "466 votes",
    review: "442 reviews",
    rating: 3.2,
    cost: 600,
    minCost: "50/- only",
    paymentMethod: "cash",
    paymentMethodMode: {
      card: false,
      cash: true,
      upi: true,
      all: true
    }
  },
  {
    name: "Kebab Pool",
    categories: "Continental,Pizza, Asian",
    votes: "466 votes",
    review: "442 reviews",
    rating: 2.6,
    cost: 400,
    minCost: "50/- only",
    paymentMethod: "card",
    paymentMethodMode: {
      card: true,
      cash: false,
      upi: true,
      all: true
    }
  }
];

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React app for restaurant</h1>

        <RestaurantDetails data={data} />
      </div>
    );
  }
}
