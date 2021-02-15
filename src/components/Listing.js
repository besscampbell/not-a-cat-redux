import React from "react";
import PropTypes from "prop-types";

function Listing(props){
  var quantity = props.quantity;
  if (quantity <= 0) {
    return (
      <>
        <div onClick = {() => props.whenItemClicked(props.id)}>
          <img src={props.image} alt="Item" width="150"></img>
          <h3>{props.name}</h3>
          <h4>{props.description}</h4>
          <h4>Out of stock</h4>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div onClick = {() => props.whenItemClicked(props.id)}>
          <img src={props.image} alt="Item" width="150"></img>
          <h3>{props.name}</h3>
          <h4>{props.description}</h4>
          <h4>{props.quantity}</h4>
        </div>
      </>
    )
  }
}

Listing.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Listing;