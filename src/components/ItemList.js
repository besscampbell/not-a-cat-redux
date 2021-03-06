import React from "react";
import Listing from "./Listing";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <>
      <hr/>
      {Object.values(props.itemList).map((listing) => 
        <Listing 
          whenItemClicked = { props.onItemSelection }
          name={listing.name}
          description={listing.description}
          quantity={listing.quantity}
          image={listing.image}
          id={listing.id}
          key={listing.id}/>
      )}
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object,
  onItemSelection: PropTypes.func
}

export default ItemList;