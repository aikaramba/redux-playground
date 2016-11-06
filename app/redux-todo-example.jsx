var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anonymous'}; // es5
  console.log(action);
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state;
  }
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current state', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New search text'
};
store.dispatch(action);
console.log('Search text must be equal to "New search text"', store.getState());
