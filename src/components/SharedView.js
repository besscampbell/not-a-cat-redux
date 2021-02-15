import { connect } from 'react-redux';
import React from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import PropTypes from 'prop-types';

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      selectedItem: null
    };
  }

  listClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        selectedItem: null,
        visibleView: 1
      });
    } else {
      this.setState({
        visibleView: 1
      });
    }
  }

  newItemClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        selectedItem: null,
        visibleView: 2
      });
    } else {
      this.setState({
        visibleView: 2
      });
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = newItem;
    const action = {
      type: 'ADD_OR_UPDATE_ITEM',
      id: id,
      name: name,
      description: description,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({
      visibleView: 1
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.masterItemList[id];
    this.setState({ selectedItem: selectedItem });
  }


  handleRestock = (itemId) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = this.props.masterItemList[itemId];
    const action = {
      type: 'ADD_OR_UPDATE_ITEM',
      id: id,
      name: name,
      description: description,
      quantity: (quantity + 1)
    }
    dispatch(action);
    const updatedItem = this.props.masterItemList[id]
    console.log(updatedItem);
    this.setState({ selectedItem: updatedItem });
  };

  handleBuy = (itemId) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = this.props.masterItemList[itemId];
    const action = {
      type: 'ADD_OR_UPDATE_ITEM',
      id: id,
      name: name,
      description: description,
      quantity: (quantity - 1),
    }
    dispatch(action);
    const updatedItem = this.props.masterItemList[id]
    console.log(updatedItem);
    // this.setState({ selectedItem: null });
    this.setState({selectedItem: updatedItem});
  };

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    this.setState({ selectedItem: null });
  }


  render() {
    let currentlyVisibleState = null;
    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onRestock={this.handleRestock} onBuy={this.handleBuy} onClickingDelete={this.handleDeletingItem} />
    } else if (this.state.visibleView === 0) {
      currentlyVisibleState = null
    } else if (this.state.visibleView === 1) {
      currentlyVisibleState = <ItemList itemList={this.props.masterItemList} onItemSelection={this.handleChangingSelectedItem} />;
    } else if (this.state.visibleView === 2) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
    }

    return (
      <>
        <button onClick={this.listClick}> List of Stuff </button>
        <button onClick={this.newItemClick}> Create new Item </button>
        {currentlyVisibleState}
      </>
    );
  }
}

SharedView.propTypes = {
  masterItemList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterItemList: state
  }
}

SharedView = connect(mapStateToProps)(SharedView);
export default SharedView;