import React from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      masterItemList: [],
      selectedItem: null
    };
  }

  listClick = () => {
    if(this.state.selectedItem != null){
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
    if(this.state.selectedItem != null){
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
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList,
                  visibleView: 1 });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }


  handleRestock = () => {
    const quantityOfItem = this.state.selectedItem.quantity;
    const restockedItem = {...this.state.selectedItem, quantity:(quantityOfItem + 1)};
    const newMasterList = this.state.masterItemList.filter(item => item.id !== this.state.selectedItem.id).concat(restockedItem);
    this.setState({selectedItem: restockedItem, masterItemList: newMasterList});
  };

  handleBuy = () => {
    const quantityOfItem = this.state.selectedItem.quantity;
    const restockedItem = {...this.state.selectedItem, quantity:(quantityOfItem - 1)};
    const newMasterList = this.state.masterItemList.filter(item => item.id !== this.state.selectedItem.id).concat(restockedItem);
    this.setState({selectedItem: restockedItem, masterItemList: newMasterList});
  };


  render(){
      let currentlyVisibleState = null;
      if (this.state.selectedItem != null) {
        currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} onRestock={this.handleRestock} onBuy={this.handleBuy}/>
      } else if (this.state.visibleView === 0) {
        currentlyVisibleState = null
      } else if (this.state.visibleView === 1) {
        currentlyVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem}/>;
      } else if (this.state.visibleView === 2) {
        currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
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

export default SharedView;