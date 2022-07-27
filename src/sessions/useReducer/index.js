import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './reducer';

const Index = () => {
  const [name, setName] = useState('');
  const defaultState = {
    people: [],
    isModalOpen: false,
    ModalContent: '',
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: uuidv4(), name };
      dispatch({ type: 'ADD_PERSON', payload: newItem });

      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}

      <form className='form' onSubmit={submitHandler}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div className='item' key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_PERSON', payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
