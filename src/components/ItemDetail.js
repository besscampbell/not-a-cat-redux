import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;
  let restockMessage;
  if(item.quantity > 0){
    restockMessage = item.quantity;
  }else {
    restockMessage =  "OUT OF STOCK";
  }
  
  return (
    <>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <h3>{item.description}</h3>
      <h3>{restockMessage}</h3>
      <button type="button" onClick={props.onRestock}className="btn btn-primary">Restock</button>
      <button hidden={item.quantity===0} type="button" onClick={props.onBuy} className="btn btn-secondary">Buy</button>
      <hr />
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onRestock: PropTypes.func,
  onBuy: PropTypes.func
};

export default ItemDetail;
