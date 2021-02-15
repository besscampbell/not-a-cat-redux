import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props) {

  return (
    <>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name'
          required />
        <input
          type='text'
          name='description'
          placeholder='About the Item' />
        <input
          type='number'
          name='quantity'
          placeholder="0"
          min='0'
          required />
        <input
          type='text'
          name='image'
          placeholder='Image URL'/>
        <button type='submit'>Create New Item</button>
      </form>
    </>
  );

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), image: event.target.image.value, id: v4()});
  }

}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};


export default NewItemForm;