export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      const addedPeople = [...state.people, action.payload];
      return {
        ...state,
        people: addedPeople,
        isModalOpen: true,
        modalContent: 'item added',
      };
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Enter a value',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    case 'DELETE_PERSON':
      const deletedPerson = state.people.find(
        (person) => person.id === action.payload,
      );

      const updatedPeople = state.people.filter((person) => {
        return person.id !== action.payload;
      });

      return {
        ...state,
        people: updatedPeople,
        isModalOpen: true,
        modalContent: `${deletedPerson.name} Removed`,
      };
    default:
      throw new Error('no matching action type');
  }
};
