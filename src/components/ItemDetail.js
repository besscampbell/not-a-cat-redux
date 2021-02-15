import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';


function ItemDetail(props) {
  const { item } = props;
  const itemQuantity = props.masterItemList[item.id].quantity
  let restockMessage;
  if(itemQuantity > 0){
    restockMessage = itemQuantity;
  }else {
    restockMessage =  "OUT OF STOCK";
  }
  
  return (
    <>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <h3>{item.description}</h3>
      <h3>{restockMessage}</h3>
      <button type="button" id= "restock" onClick={() => props.onRestock(item.id)}className="btn btn-primary">Restock</button>
      <button hidden={itemQuantity===0} type="button" id="buy" onClick={() => props.onBuy(item.id)} className="btn btn-secondary">Buy</button>
      <hr />
      <button onClick={()=> props.onClickingDelete(item.id)}>Delete Item</button>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onRestock: PropTypes.func,
  onBuy: PropTypes.func,
  onClickingDelete: PropTypes.func,
  masterItemList: PropTypes.object
};


const mapStateToProps = state => {
  return {
    masterItemList: state
  }
}

ItemDetail = connect(mapStateToProps)(ItemDetail);

export default ItemDetail;
