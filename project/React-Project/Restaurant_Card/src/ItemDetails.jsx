import React from "react";

export default function ItemDetails(props) {
  const stylesObj = {
    main: {
      width: 400,
      height: 300,
      backgroundColor: "lightgray",
      // display: "flex",
      // justifyContent: "center",
      margin: 10
    },
    textColor: {
      color: "tomato",
      textAlign: "center"
    },
    imageStyle: {
      width: 120,
      height: 120,
      backgroundColor: "black",
      borderRadius: 8
    }
  };

  const {
    name,
    categories,
    votes,
    rating,
    review,
    minCost,
    cost,
    paymentMethod
  } = props;

  return (
    <>
      <div style={{ margin: "5px" }}>
        <div
          style={{
            display: "flex",
            border: "1px solid lightgray",
            padding: "10px",
            backgroundColor: "#E8EBF3 "
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1588078556583-3991b2e26441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            style={stylesObj.imageStyle}
            alt="foodimage"
          />
          <div style={{ marginLeft: "10px" }}>
            <h2 style={{ margin: "8px" }}>{props.name}</h2>
            <p style={{ color: "gray", fontSize: "14px" }}>
              {props.categories}
            </p>
            <p style={{ fontSize: 14 }}>cost for two {cost}/-</p>
            <p> we accept {paymentMethod} only</p>
          </div>
          <div style={{ float: "right" }}>
            <p
              style={{
                backgroundColor: "lightgreen",
                padding: "4px",
                borderRadius: "4px",
                textAlign: "center",
                margin: "0"
              }}
            >
              {rating}
            </p>
            <p style={{ margin: "0", fontSize: "14px" }}>{review}</p>
            <p style={{ margin: "0", fontSize: "14px" }}> {votes}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white ",
            flexDirection: "row-reverse",
            border: "1px solid lightgray",
            margin: "0"
          }}
        >
          <p style={{ fontSize: "18px", marginRight: "10px" }}>Online order</p>
        </div>
      </div>

      {/* <div style={stylesObj.main}>
        <h1 style={stylesObj.textColor}>{name}</h1>
        <div style={{ display: "flex" }}>
          <img
            style={stylesObj.imageStyle}
            src="https://images.unsplash.com/photo-1588078556583-3991b2e26441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p style={{ marginLeft: 5 }}>{categories}</p>
          <br />
          <p>{cost}</p>
        </div>
      </div> */}
    </>
  );
}
